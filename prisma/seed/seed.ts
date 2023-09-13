import { PrismaClient } from '@prisma/client';
import { seedAuthorsAndGenres } from './main-seeder';

const prisma = new PrismaClient();

async function main() {
  await seedAuthorsAndGenres();
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => {
    prisma.$disconnect();
  });
