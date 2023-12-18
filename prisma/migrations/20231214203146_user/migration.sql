-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR NOT NULL,
    "completedAt" TIMESTAMP,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);
