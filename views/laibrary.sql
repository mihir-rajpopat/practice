CREATE TABLE `Users` (
  `user_id` bigint PRIMARY KEY,
  `username` varchar(255),
  `password` varchar(255),
  `email` varchar(255),
  `Active_code` varchar(255),
  `role_id` bigint,
  `status` tinyint,
  `solt` varchar(4),
  `Created_at` timestamp,
  `Updated_at` timestamp
);

CREATE TABLE `books` (
  `book_id` bigint,
  `title` varchar(255),
  `author` varchar(255),
  `publication_year` varchar(255),
  `ISBN` bigint,
  `image_name` tinyint,
  `status` varchar(4),
  `Created_at` timestamp,
  `Updated_at` timestamp,
  PRIMARY KEY (`book_id`, `ISBN`)
);

CREATE TABLE `Roles` (
  `Role_id` bigint PRIMARY KEY,
  `Role` varchar(20),
  `Created_at` timestamp,
  `Updated_at` timestamp
);

CREATE TABLE `Permission` (
  `Permission_id` bigint PRIMARY KEY,
  `Permission` varchar(20),
  `Created_at` timestamp,
  `Updated_at` timestamp
);

CREATE TABLE `Logs` (
  `username` varchar(20),
  `email` varchar(20),
  `logtime` timestamp
);

CREATE TABLE `Roles_has_Permission` (
  `Permission_id` bigint,
  `Role_id` bigint,
  PRIMARY KEY (`Permission_id`, `Role_id`)
);

CREATE TABLE `genre` (
  `genre_id` bigint,
  `genre` varchar(20),
  `book_id` bigint,
  `Created_at` timestamp,
  `Updated_at` timestamp,
  PRIMARY KEY (`genre_id`, `book_id`)
);

CREATE TABLE `comments` (
  `book_id` bigint PRIMARY KEY,
  `comment` varchar(20),
  `comment_id` varchar(20),
  `Created_at` timestamp,
  `Updated_at` timestamp
);

CREATE TABLE `Reviws` (
  `book_id` bigint,
  `star` float,
  `user_id` bigint,
  `review` varchar(20),
  `Created_at` timestamp,
  `Updated_at` timestamp,
  PRIMARY KEY (`book_id`, `user_id`)
);

CREATE TABLE `user_laibrary` (
  `book_id` bigint,
  `user_id` bigint,
  PRIMARY KEY (`book_id`, `user_id`)
);

CREATE TABLE `user_language_prefrences` (
  `user_id` bigint PRIMARY KEY,
  `language` varchar(30)
);

CREATE TABLE `book_language` (
  `book_id` bigint PRIMARY KEY,
  `language` varchar(30)
);

ALTER TABLE `Roles_has_Permission` ADD FOREIGN KEY (`Permission_id`) REFERENCES `Permission` (`Permission_id`);

ALTER TABLE `Roles_has_Permission` ADD FOREIGN KEY (`Role_id`) REFERENCES `Roles` (`Role_id`);

ALTER TABLE `Users` ADD FOREIGN KEY (`role_id`) REFERENCES `Roles` (`Role_id`);

ALTER TABLE `genre` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);

ALTER TABLE `user_laibrary` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);

ALTER TABLE `Reviws` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);

ALTER TABLE `user_language_prefrences` ADD FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`);

ALTER TABLE `book_language` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);

ALTER TABLE `Reviws` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);

ALTER TABLE `user_laibrary` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);

ALTER TABLE `comments` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`book_id`);
