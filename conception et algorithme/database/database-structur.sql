create database if not exists `quiz`;
use `quiz`;

create table if not exists `admin`(
    `id`       int(11) primary key auto_increment,
    `email`    varchar(256) not null,
    `password` varchar(256) not null
);

create table if not exists `user`(
    `id`         int(11) primary key auto_increment,
    `username`   varchar(256) not null unique ,
    `password`   varchar(256) not null,
    `ip_address` varchar(256) null,
    `browser`    varchar(256) null,
    `os`         varchar(256) null
);

create table if not exists `score`(
    `id_user` int(11) not null ,
    `score`   int(16) not null ,
    `duration` time not null,
    `date`  datetime not null,
    CONSTRAINT fk_scoreUser FOREIGN KEY(`id_user`) REFERENCES `user`(`id`)
);

create table if not exists `question` (
    `id` int(11) auto_increment primary key,
    `question` varchar(256) not null
);

create table if not exists `choice`(
    `id_question` int(11) not null,
    `choice` varchar(256) not null,
    `correctAnswer` bool not null,
    CONSTRAINT fk_choiceQuestion FOREIGN KEY (`id_question`) REFERENCES `question`(`id`)
);
