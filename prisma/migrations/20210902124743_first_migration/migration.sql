-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "dateSeance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Voting" (
    "id" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "type" INTEGER NOT NULL,
    "voix" INTEGER NOT NULL,
    "ip" TEXT NOT NULL,
    "dateSeance" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
