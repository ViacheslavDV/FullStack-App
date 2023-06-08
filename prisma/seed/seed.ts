import { PrismaClient } from '@prisma/client';
import { seedUsers } from './seed-users';
import { seedMusic } from './seed-music';
import { seedAuthors } from './seed-authors';

const prisma = new PrismaClient();

async function main() {
  // await seedUsers();
  // await seedMusic();
  await seedAuthors();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
