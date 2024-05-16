/*
  Warnings:

  - You are about to drop the column `optionsJson` on the `IncomeBudget` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IncomeBudget" DROP COLUMN "optionsJson",
ADD COLUMN     "options" JSONB[];
