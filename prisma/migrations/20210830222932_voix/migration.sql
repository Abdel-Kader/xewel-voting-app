/*
  Warnings:

  - Added the required column `ip` to the `Voting` table without a default value. This is not possible if the table is not empty.
  - Added the required column `voix` to the `Voting` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Voting" ADD COLUMN     "ip" TEXT NOT NULL,
ADD COLUMN     "voix" INTEGER NOT NULL;
