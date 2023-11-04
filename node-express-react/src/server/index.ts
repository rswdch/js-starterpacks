import express from "express";
// import cors from "cors";
import cookieParser from 'cookie-parser';
import path from "path";
import { fileURLToPath } from "url";
// import { router } from "./routes/api.js";

const app = express();
app.use(express.json());
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
// app.use("/api", router);

// Global Error Handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: "Express error handler caught unknown middleware error",
    status: 500,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});