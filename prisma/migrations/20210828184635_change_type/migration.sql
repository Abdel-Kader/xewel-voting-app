/*
  Warnings:

  - Changed the type of `dateSeance` on the `Orateur` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Orateur" DROP COLUMN "dateSeance",
ADD COLUMN     "dateSeance" TIMESTAMP(3) NOT NULL;
