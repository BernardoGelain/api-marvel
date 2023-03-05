/*
  Warnings:

  - Added the required column `image_url` to the `posts` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "image_url" TEXT NOT NULL
);
INSERT INTO "new_posts" ("content", "created_at", "id", "slug", "title") SELECT "content", "created_at", "id", "slug", "title" FROM "posts";
DROP TABLE "posts";
ALTER TABLE "new_posts" RENAME TO "posts";
CREATE UNIQUE INDEX "posts_title_key" ON "posts"("title");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
