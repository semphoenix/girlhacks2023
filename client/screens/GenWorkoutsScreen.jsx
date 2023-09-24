import React, { useEffect } from "react";
import { ListRenderItemInfo, StyleSheet, View } from "react-native";
import { Card, List, Text, ListItem } from "@ui-kitten/components";
import { MuscleContext } from "../contexts/muscle";

const data = new Array(8).fill({
  title: "Item",
});

export default GenWorkoutsScreen = () => {
  const { muscle } = React.useContext(MuscleContext);
  const [workouts, setWorkouts] = React.useState([]);
  const genWorkout = async () => {
    try {
      const response = await fetch(
        "http://localhost:3001/workouts/createWorkouts",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            muscle: muscle,
          }),
        }
      );
      const json = await response.json();
      const { workouts } = json;
      console.log("here");
      setWorkouts(workouts);
    } catch (error) {
      console.error(error);
    }
  };
  genWorkout();
  const renderItem = () =>
    workouts.map((workout) => (
      <Card
        key={workout.workout_name}
        style={styles.item}
        status="basic"
        header={() => (
          <Text category="h6" style={{ textAlign: "center" }}>
            {workout.workout_name}
          </Text>
        )}
      >
        <Text>Difficulty: {workout.difficulty}</Text>
        <Text>Sets: {workout.sets}</Text>
        <Text>Reps: {workout.reps}</Text>
      </Card>
    ));

  return (
    <View style={{ justifyContent: "center", alignContent: "center", flex: 1 }}>
      <List style={styles.container} data={data} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  item: {
    marginVertical: 4,
  },
});
