import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seed-users';
import { seedMusic } from './seed-music';

const prisma = new PrismaClient();

async function main() {
  // await seedUsers();
  console.log('seed started...');
  await seedMusic();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
