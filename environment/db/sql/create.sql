CREATE DATABASE IF NOT EXISTS todo;
USE todo;

CREATE TABLE IF NOT EXISTS task (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL,
    `description` varchar(255) NOT NULL,
    `status` int(11),
    `created_at` datetime,
    `updated_at` datetime,
    PRIMARY KEY (`id`)
);

INSERT INTO task (name, description, status, created_at, updated_at) VALUES ('設計', '機能設計', 1, NOW(), NOW());