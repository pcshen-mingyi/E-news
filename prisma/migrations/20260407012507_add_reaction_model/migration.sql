-- CreateTable
CREATE TABLE "Reaction" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "articleSlug" TEXT NOT NULL,
    "ipHash" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "Reaction_articleSlug_idx" ON "Reaction"("articleSlug");

-- CreateIndex
CREATE UNIQUE INDEX "Reaction_articleSlug_ipHash_key" ON "Reaction"("articleSlug", "ipHash");
