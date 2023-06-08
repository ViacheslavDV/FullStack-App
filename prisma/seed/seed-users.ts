import { PrismaClient } from '@prisma/client';
import { users } from '../data/users';

const prisma = new PrismaClient();

export async function seedUsers() {
  for (let user of users) {
    await prisma.user.create({
      data: user,
    });
  }
}
