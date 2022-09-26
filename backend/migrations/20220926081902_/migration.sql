-- CreateTable
CREATE TABLE `Admin` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL DEFAULT '',
    `password` VARCHAR(191) NOT NULL,
    `is_root_admin` BOOLEAN NOT NULL DEFAULT false,

    UNIQUE INDEX `Admin_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Article` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `is_display` INTEGER NOT NULL DEFAULT 0,
    `status` ENUM('pending', 'approved', 'rejected') NOT NULL,
    `title` VARCHAR(191) NOT NULL DEFAULT '',
    `author_name` VARCHAR(191) NOT NULL DEFAULT '',
    `author_image` VARCHAR(191) NOT NULL DEFAULT '',
    `author_email` VARCHAR(191) NOT NULL DEFAULT '',
    `hashtags` VARCHAR(191) NOT NULL DEFAULT '',
    `is_exclusive` BOOLEAN NOT NULL DEFAULT false,
    `content` TEXT NULL,
    `references` TEXT NULL,
    `is_admin` BOOLEAN NOT NULL DEFAULT false,
    `created_at` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Category` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `AMABanner` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `banner` VARCHAR(191) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_Article_category` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_Article_category_AB_unique`(`A`, `B`),
    INDEX `_Article_category_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_Article_category` ADD CONSTRAINT `_Article_category_A_fkey` FOREIGN KEY (`A`) REFERENCES `Article`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_Article_category` ADD CONSTRAINT `_Article_category_B_fkey` FOREIGN KEY (`B`) REFERENCES `Category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
