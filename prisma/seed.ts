import { PrismaClient } from "@prisma/client";
import { User } from "./data/User";

const prisma = new PrismaClient();

export async function main() {
  try {
    for (const u of User) {
      await prisma.user.create({
        data: u,
      });
    }
  } catch (err) {
    console.error(err);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

main();
