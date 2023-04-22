import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seed-users';

const prisma = new PrismaClient();

async function main() {
  await seedUsers();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
