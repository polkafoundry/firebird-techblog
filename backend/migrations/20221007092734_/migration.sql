-- AlterTable
ALTER TABLE `Article` ADD COLUMN `thumbnail_extension` VARCHAR(191) NULL,
    ADD COLUMN `thumbnail_filesize` INTEGER NULL,
    ADD COLUMN `thumbnail_height` INTEGER NULL,
    ADD COLUMN `thumbnail_id` VARCHAR(191) NULL,
    ADD COLUMN `thumbnail_width` INTEGER NULL;
