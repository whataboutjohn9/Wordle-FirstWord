-- 10,000 common words found at https://www.mit.edu/~ecprice/wordlist.10000
CREATE TABLE `words_common` (
 `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
 `common_words` VARCHAR(255) NOT NULL,
 PRIMARY KEY (`id`)
) ENGINE=InnoDB
 DEFAULT CHARSET=utf8mb4
 COLLATE=utf8mb4_unicode_ci;