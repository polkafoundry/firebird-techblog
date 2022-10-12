/*
  Warnings:

  - A unique constraint covering the columns `[alias]` on the table `Article` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Article` ADD COLUMN `alias` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `Article_alias_key` ON `Article`(`alias`);
