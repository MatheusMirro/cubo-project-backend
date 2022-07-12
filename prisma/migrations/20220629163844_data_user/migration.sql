-- CreateTable
CREATE TABLE "DataUser" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "lastname" TEXT NOT NULL,
    "participation" TEXT NOT NULL,

    CONSTRAINT "DataUser_pkey" PRIMARY KEY ("id")
);
