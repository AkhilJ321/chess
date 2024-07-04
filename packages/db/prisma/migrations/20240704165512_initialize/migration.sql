/*
  Warnings:

  - Added the required column `endFen` to the `Move` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startFen` to the `Move` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Move" ADD COLUMN     "endFen" TEXT NOT NULL,
ADD COLUMN     "startFen" TEXT NOT NULL;
