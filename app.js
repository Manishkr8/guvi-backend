import express from "express";
import { config } from "dotenv";
import ErrorMiddleware from "./middlewares/Error.js";
import cookieParser from "cookie-parser";
import cors from "cors";
config({
  path: "./config/config.env",
});
const app = express();

// Using middlewares
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  methods: ["GET", "POST", "PUT", "DELETE"],
};
app.use(cors(corsOptions));

// Importing and using Routes
import user from "./routes/userRoutes.js";
app.use("/api/v1", user);

app.get("/", (req, res) => {
  res.send(
    `<h1>Site is Working. Click <a href=${process.env.FRONTEND}>here</a> to visit frontend.</h1>`
  );
});
export default app;


app.use(ErrorMiddleware);
