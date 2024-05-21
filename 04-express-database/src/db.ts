import { PrismaClient } from "@prisma/client";
import { object } from "zod";

export const prisma = new PrismaClient();

console.log(Object.keys(prisma));

