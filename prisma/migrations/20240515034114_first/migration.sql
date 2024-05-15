/*
  Warnings:

  - You are about to drop the column `eSlug` on the `Expense` table. All the data in the column will be lost.
  - You are about to drop the column `eb_name` on the `ExpenseBudget` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `ExpenseBudget` table. All the data in the column will be lost.
  - You are about to drop the column `ib_name` on the `IncomeBudget` table. All the data in the column will be lost.
  - You are about to drop the column `slug` on the `IncomeBudget` table. All the data in the column will be lost.
  - You are about to drop the `Income` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `expenseTypeId` to the `Expense` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Expense" DROP CONSTRAINT "Expense_eSlug_fkey";

-- DropForeignKey
ALTER TABLE "Income" DROP CONSTRAINT "Income_iSlug_fkey";

-- DropIndex
DROP INDEX "ExpenseBudget_slug_key";

-- DropIndex
DROP INDEX "IncomeBudget_slug_key";

-- AlterTable
ALTER TABLE "Expense" DROP COLUMN "eSlug",
ADD COLUMN     "expenseTypeId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "ExpenseBudget" DROP COLUMN "eb_name",
DROP COLUMN "slug",
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

-- AlterTable
ALTER TABLE "IncomeBudget" DROP COLUMN "ib_name",
DROP COLUMN "slug";

-- DropTable
DROP TABLE "Income";

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "IncomeItem" (
    "i_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "i_name" TEXT NOT NULL,
    "i_amount" DECIMAL(65,30) NOT NULL,
    "incomeTypeId" TEXT NOT NULL,

    CONSTRAINT "IncomeItem_pkey" PRIMARY KEY ("i_id")
);

-- CreateTable
CREATE TABLE "SavingBudget" (
    "sb_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "sb_amount" DECIMAL(65,30) NOT NULL,

    CONSTRAINT "SavingBudget_pkey" PRIMARY KEY ("sb_id")
);

-- CreateTable
CREATE TABLE "Saving" (
    "s_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "s_name" TEXT NOT NULL,
    "s_amount" DECIMAL(65,30) NOT NULL,
    "savingTypeId" TEXT NOT NULL,

    CONSTRAINT "Saving_pkey" PRIMARY KEY ("s_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "IncomeItem" ADD CONSTRAINT "IncomeItem_incomeTypeId_fkey" FOREIGN KEY ("incomeTypeId") REFERENCES "IncomeBudget"("ib_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_expenseTypeId_fkey" FOREIGN KEY ("expenseTypeId") REFERENCES "ExpenseBudget"("eb_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Saving" ADD CONSTRAINT "Saving_savingTypeId_fkey" FOREIGN KEY ("savingTypeId") REFERENCES "SavingBudget"("sb_id") ON DELETE RESTRICT ON UPDATE CASCADE;
