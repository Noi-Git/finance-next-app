/*
  Warnings:

  - Added the required column `eb_name` to the `ExpenseBudget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ib_name` to the `IncomeBudget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sb_name` to the `SavingBudget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExpenseBudget" ADD COLUMN     "eb_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "IncomeBudget" ADD COLUMN     "ib_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "SavingBudget" ADD COLUMN     "sb_name" TEXT NOT NULL;
