import * as express from "express";
import { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).send("Hello World!");
});

export default router;
