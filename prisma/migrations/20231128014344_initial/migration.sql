-- CreateTable
CREATE TABLE "Character" (
    "characterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "clan" TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "jutsus" TEXT[],
    "image" TEXT NOT NULL,
    "quote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Character_pkey" PRIMARY KEY ("characterId")
);
