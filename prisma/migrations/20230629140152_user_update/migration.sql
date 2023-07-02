/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Author` table. All the data in the column will be lost.
  - You are about to drop the column `authorId` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `file` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Song` table. All the data in the column will be lost.
  - You are about to drop the column `hashedRefreshToken` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `Author` table without a default value. This is not possible if the table is not empty.
  - Added the required column `author_id` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `file_path` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `Song` table without a default value. This is not possible if the table is not empty.
  - Made the column `album` on table `Song` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Song" DROP CONSTRAINT "Song_authorId_fkey";

-- AlterTable
ALTER TABLE "Author" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Song" DROP COLUMN "authorId",
DROP COLUMN "createdAt",
DROP COLUMN "file",
DROP COLUMN "updatedAt",
ADD COLUMN     "author_id" INTEGER NOT NULL,
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "file_path" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "album" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "hashedRefreshToken",
DROP COLUMN "role",
ADD COLUMN     "is_admin" BOOLEAN NOT NULL DEFAULT false;

-- DropEnum
DROP TYPE "Role";

-- AddForeignKey
ALTER TABLE "Song" ADD CONSTRAINT "Song_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Author"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
