-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2023 at 11:54 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `quiz`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `email` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `email`, `password`) VALUES
(1, 'khalid@admin.com', 'password'),
(2, 'admin@admin.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

-- --------------------------------------------------------

--
-- Table structure for table `choice`
--

CREATE TABLE `choice` (
  `id_question` int(11) NOT NULL,
  `choice` varchar(256) NOT NULL,
  `correctAnswer` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `choice`
--

INSERT INTO `choice` (`id_question`, `choice`, `correctAnswer`) VALUES
(1, 'Personal Home Page', 1),
(1, 'Hypertext Preprocessor', 1),
(1, 'Pretext Hypertext Processor', 0),
(1, 'Preprocessor Home Page', 0),
(2, '&lt;php', 0),
(2, '&lt;?', 0),
(2, '&lt;?php', 1),
(2, 'php', 0),
(5, 'Adobe Dreamweaver', 0),
(5, 'PHP', 1),
(5, 'Apache', 1),
(5, 'IIS', 1),
(6, 'function MyClass { }', 0),
(6, 'class MyClass { }', 1),
(6, 'define MyClass { }', 0),
(6, 'class { MyClass }', 0);

-- --------------------------------------------------------

--
-- Table structure for table `question`
--

CREATE TABLE `question` (
  `id` int(11) NOT NULL,
  `question` varchar(256) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question`
--

INSERT INTO `question` (`id`, `question`) VALUES
(1, 'Que signifie PHP?'),
(2, 'Un script PHP devrait commencer par ___ ?'),
(5, 'Lequel des elements suivants doit etre installe sur votre ordinateur pour executer des scripts PHP?'),
(6, 'What is the correct way to define a class in PHP?');

-- --------------------------------------------------------

--
-- Table structure for table `score`
--

CREATE TABLE `score` (
  `id_user` int(11) NOT NULL,
  `score` int(16) NOT NULL,
  `duration` time NOT NULL,
  `date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `username` varchar(256) NOT NULL,
  `password` varchar(256) NOT NULL,
  `ip_address` varchar(256) DEFAULT NULL,
  `browser` varchar(256) DEFAULT NULL,
  `os` varchar(256) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `password`, `ip_address`, `browser`, `os`) VALUES
(1, 'kfifel', 'mkng', NULL, NULL, NULL),
(2, 'user1', 'user1', NULL, NULL, NULL),
(3, 'user2', 'user2', NULL, NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `choice`
--
ALTER TABLE `choice`
  ADD KEY `fk_choiceQuestion` (`id_question`);

--
-- Indexes for table `question`
--
ALTER TABLE `question`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `score`
--
ALTER TABLE `score`
  ADD KEY `fk_scoreUser` (`id_user`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `question`
--
ALTER TABLE `question`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `choice`
--
ALTER TABLE `choice`
  ADD CONSTRAINT `fk_choiceQuestion` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`);

--
-- Constraints for table `score`
--
ALTER TABLE `score`
  ADD CONSTRAINT `fk_scoreUser` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
