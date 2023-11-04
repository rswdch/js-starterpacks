import { Request, Response, NextFunction } from "express";
import { db } from "../../models/kysely";
// import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();
const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS);

export async function login(req: Request, res: Response, next: NextFunction) {
  next();
}