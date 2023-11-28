-- CreateTable
CREATE TABLE "Character" (
    "characterId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "clan"  TEXT NOT NULL,
    "village" TEXT NOT NULL,
    "jutsus"   TEXT NOT NULL,
    "image"  TEXT NOT NULL,
    "quote"  

    CONSTRAINT "Character_pkey" PRIMARY KEY ("characterId")
);
