require("dotenv").config();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const createWorkouts = async ({ muscle, difficulty, time }) => {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Respond in JSON format with workout_name, muscle, trainingModality, difficulty, sets, reps, rest_between_sets, workout_time",
      },
      {
        role: "user",
        content: `Give me 3 workouts at a ${difficulty} level for ${muscle} that are done in under ${time}`,
      },
    ],
    temperature: 0.5,
    max_tokens: 1024,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  });

  const workout = JSON.parse(response.choices[0].message.content);
  console.log(workout);
  const workouts = workout.workouts;
  return { workouts };
};

const addWorkout = async ({ workout, id }) => {
  const addedWorkout = prisma.workout.create({
    data: {
      name: workout.name,
      muscle: workout.muscle,
      trainingModality: workout.trainingModality,
      difficulty: workout.difficulty,
      sets: workout.sets,
      reps: workout.reps,
      restBetweenSets: workout.restBetweenSets,
      workoutTime: workout.workoutTime,
      user: {
        connect: {
          id: id,
        },
      },
    },
  });
  return { addedWorkout };
};

const getWorkouts = async (id) => {
  const workouts = await prisma.workout.findMany({
    where: { userId: id },
  });
  return { workouts };
};

module.exports = { createWorkouts, addWorkout, getWorkouts };
