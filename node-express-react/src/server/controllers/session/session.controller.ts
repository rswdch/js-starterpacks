import { Request, Response, NextFunction } from "express";
import { db } from "../../models/kysely";
// import * as bcrypt from "bcrypt";
import * as dotenv from "dotenv";

dotenv.config();
const SALT_ROUNDS: number = Number(process.env.SALT_ROUNDS);

export async function getAllUsers(req: Request, res: Response, next: NextFunction) {
  const rows = await db.selectFrom("users").select("username").execute();
  res.locals.users = rows;
  next();
}