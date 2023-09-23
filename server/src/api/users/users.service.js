const { PrismaClient } = require("@prisma/client");
const { BadRequestError, UnauthorizedError } = require("../../utils/errors");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");
const BCRYPT_WORK_FACTOR = 10;

function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

const login = async ({ email, password }) => {
  const normalizedEmail = email.toLowerCase();
  const user = await prisma.user.findFirst({
    where: { email: normalizedEmail },
  });
  if (user) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid === true) {
      delete user["password"];
      return { user };
    }
    console.log("Wrong password!");
  }
  throw new UnauthorizedError("Invalid Password/Email combination");
};

const register = async ({ firstName, lastName, email, password }) => {
  const normalizedEmail = email.toLowerCase();
  const existingUserWithEmail = await prisma.user.findFirst({
    where: { email: normalizedEmail },
  });
  if (existingUserWithEmail)
    throw new BadRequestError(
      `User with Email ${normalizedEmail} already exists`
    );
  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);
  const user = await prisma.user.create({
    data: {
      firstName: capitalizeWords(firstName),
      lastName: capitalizeWords(lastName),
      email: normalizedEmail,
      password: hashedPassword,
    },
  });
  delete user["password"];
  return { user };
};

const getUser = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });
  delete user["password"];
  return { user };
};

module.exports = { login, register, getUser };
