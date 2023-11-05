import express from "express";
import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
// import cors from "cors";
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from "url";
import userRouter from "./controllers/user/user.routes.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// CORS
// const whitelist = [
//   undefined,
//   "http://localhost:8080",
// ];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin: any, callback: any) => {
//     if (whitelist.includes(origin)) return callback(null, true);
//     callback(new Error("Not allowed by CORS"));
//   },
// };
// app.use(cors(corsOptions))

// app.use(cookieParser());


// Routes
app.use("/api/user", userRouter);

// Global Error Handler
const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  // All errors from async & non-async route above will be handled here
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: "An error occurred",
  };
  const errorObj = Object.assign({}, defaultErr, err);

  console.error(errObj.stack);
  console.error(err.message);
  console.log(errorObj.log);
  res.status(500).send("An unknown error has occurred.");
  return res.status(errorObj.status).json(errorObj.message);
};
app.use(globalErrorHandler);

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});