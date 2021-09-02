-- CreateTable
CREATE TABLE "Orateur" (
    "id" SERIAL NOT NULL,
    "type" INTEGER NOT NULL,
    "dateSeance" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY ("id")
);
