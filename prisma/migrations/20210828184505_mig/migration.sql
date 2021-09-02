/*
  Warnings:

  - Added the required column `nom` to the `Orateur` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Orateur" ADD COLUMN     "nom" TEXT NOT NULL;
