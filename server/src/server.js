const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { NotFoundError } = require("../src/utils/errors");

const PORT = process.env.PORT || 3001;

const app = express();

// enable cross-origin resource sharing for all origins for all requests hosting our frontend.
app.use(cors());
// parse incoming requests with JSON payloads
app.use(express.json());
// log requests info
app.use(morgan("tiny"));

// Health CHeck
app.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// const recipesRoutes = require("./api/recipes/recipes.controller");
// app.use("/recipes", recipesRoutes);

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  const status = err.status || 500;
  const message = err.message;
  console.error(err.stack);
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
