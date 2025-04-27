import express from "express";
import morgan from "morgan";
import activityRoutes from "./routes/activityRoutes";
import cors from "cors";

// import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// Routes
app.use("/api/activities", activityRoutes as express.Router);
console.log("activityRoutes isRouter:", typeof activityRoutes);

// Healthcheck
app.get("/", (req, res) => {
  res.send("Welcome to the Activity Suggestion API!");
});

export default app;
