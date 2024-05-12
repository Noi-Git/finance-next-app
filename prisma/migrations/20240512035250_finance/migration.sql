-- CreateTable
CREATE TABLE "IncomeBudget" (
    "ib_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ib_name" TEXT NOT NULL,
    "ib_amount" DECIMAL(65,30) NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "IncomeBudget_pkey" PRIMARY KEY ("ib_id")
);

-- CreateTable
CREATE TABLE "Income" (
    "i_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "i_name" TEXT NOT NULL,
    "i_amount" DECIMAL(65,30) NOT NULL,
    "iSlug" TEXT NOT NULL,

    CONSTRAINT "Income_pkey" PRIMARY KEY ("i_id")
);

-- CreateTable
CREATE TABLE "ExpenseBudget" (
    "eb_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "eb_name" TEXT NOT NULL,
    "eb_amount" DECIMAL(65,30) NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "ExpenseBudget_pkey" PRIMARY KEY ("eb_id")
);

-- CreateTable
CREATE TABLE "Expense" (
    "e_id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "e_name" TEXT NOT NULL,
    "e_amount" DECIMAL(65,30) NOT NULL,
    "eSlug" TEXT NOT NULL,

    CONSTRAINT "Expense_pkey" PRIMARY KEY ("e_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "IncomeBudget_slug_key" ON "IncomeBudget"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "ExpenseBudget_slug_key" ON "ExpenseBudget"("slug");

-- AddForeignKey
ALTER TABLE "Income" ADD CONSTRAINT "Income_iSlug_fkey" FOREIGN KEY ("iSlug") REFERENCES "IncomeBudget"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Expense" ADD CONSTRAINT "Expense_eSlug_fkey" FOREIGN KEY ("eSlug") REFERENCES "ExpenseBudget"("slug") ON DELETE RESTRICT ON UPDATE CASCADE;
