/*
  Warnings:

  - You are about to drop the `Candidat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Orateur` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Candidat";

-- DropTable
DROP TABLE "Orateur";

-- CreateTable
CREATE TABLE "Voting" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "dateSeance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
