-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: testdb
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account_details`
--

DROP TABLE IF EXISTS `account_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `Email` varchar(255) NOT NULL,
  `DateOfCreating` datetime NOT NULL,
  `DisplayName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`,`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account_details`
--

LOCK TABLES `account_details` WRITE;
/*!40000 ALTER TABLE `account_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `account_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `applies`
--

DROP TABLE IF EXISTS `applies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `applies` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `RecruimentID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SeekerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ApplyDate` datetime NOT NULL,
  `ApplyCV` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`,`RecruimentID`,`SeekerID`),
  KEY `RecruimentID` (`RecruimentID`),
  KEY `SeekerID` (`SeekerID`),
  CONSTRAINT `applies_ibfk_1` FOREIGN KEY (`RecruimentID`) REFERENCES `recruitments` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `applies_ibfk_2` FOREIGN KEY (`SeekerID`) REFERENCES `seekers` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `applies`
--

LOCK TABLES `applies` WRITE;
/*!40000 ALTER TABLE `applies` DISABLE KEYS */;
/*!40000 ALTER TABLE `applies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `FieldID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `CompanyName` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `CompanyEmail` varchar(255) NOT NULL,
  `CompanyDescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserID` (`UserID`),
  UNIQUE KEY `CompanyName` (`CompanyName`),
  UNIQUE KEY `CompanyEmail` (`CompanyEmail`),
  KEY `FieldID` (`FieldID`),
  CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `companies_ibfk_2` FOREIGN KEY (`FieldID`) REFERENCES `fields` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES ('9277f0a0-50c7-11eb-aecb-c319e55026a3','6f93c000-50c7-11eb-aecb-c319e55026a3',NULL,'WanWan Inc.','Ho Chi Minh City','wan@gmail.com','A sample company','2021-01-07 09:06:05','2021-01-07 09:06:05');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `education_details`
--

DROP TABLE IF EXISTS `education_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `education_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SeekerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `MajorID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `Degree` varchar(255) NOT NULL,
  `UniversityName` varchar(255) NOT NULL,
  `GPA` float NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `SeekerID` (`SeekerID`),
  KEY `MajorID` (`MajorID`),
  CONSTRAINT `education_details_ibfk_1` FOREIGN KEY (`SeekerID`) REFERENCES `seekers` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `education_details_ibfk_2` FOREIGN KEY (`MajorID`) REFERENCES `majors` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `education_details`
--

LOCK TABLES `education_details` WRITE;
/*!40000 ALTER TABLE `education_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `education_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fields`
--

DROP TABLE IF EXISTS `fields`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fields` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `FieldName` varchar(255) NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `FieldName` (`FieldName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fields`
--

LOCK TABLES `fields` WRITE;
/*!40000 ALTER TABLE `fields` DISABLE KEYS */;
/*!40000 ALTER TABLE `fields` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `RecruitmentID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `MajorID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `JobName` varchar(255) DEFAULT NULL,
  `JobType` varchar(255) DEFAULT NULL,
  `JobDescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `RecruitmentID` (`RecruitmentID`),
  KEY `MajorID` (`MajorID`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`RecruitmentID`) REFERENCES `recruitments` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`MajorID`) REFERENCES `majors` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES ('18d2a940-50d4-11eb-888e-a5b750478300','18cd2b00-50d4-11eb-888e-a5b750478300',NULL,'Full-stack React Development',NULL,'This is a sample job','2021-01-07 10:35:44','2021-01-07 10:35:44'),('468bd4e0-50f9-11eb-9cd3-95ca5638606a','46839780-50f9-11eb-9cd3-95ca5638606a',NULL,'Full-stack React Developer',NULL,'This is a sample job','2021-01-07 15:01:52','2021-01-07 15:01:52'),('b788c540-50c7-11eb-aecb-c319e55026a3','b78590f0-50c7-11eb-aecb-c319e55026a3',NULL,'Back-end developer',NULL,'This is a sample job','2021-01-07 09:07:07','2021-01-07 09:07:07');
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `linked_sites`
--

DROP TABLE IF EXISTS `linked_sites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `linked_sites` (
  `LinkedSite` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`LinkedSite`,`Email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `linked_sites`
--

LOCK TABLES `linked_sites` WRITE;
/*!40000 ALTER TABLE `linked_sites` DISABLE KEYS */;
/*!40000 ALTER TABLE `linked_sites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `majors`
--

DROP TABLE IF EXISTS `majors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `majors` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `MajorName` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `majors`
--

LOCK TABLES `majors` WRITE;
/*!40000 ALTER TABLE `majors` DISABLE KEYS */;
/*!40000 ALTER TABLE `majors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recruitments`
--

DROP TABLE IF EXISTS `recruitments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recruitments` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `CompanyID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `RecruitmentDate` datetime NOT NULL,
  `ExpiredDate` datetime NOT NULL,
  `Description` varchar(255) DEFAULT NULL,
  `Salary` int DEFAULT NULL,
  `Requirement` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `CompanyID` (`CompanyID`),
  CONSTRAINT `recruitments_ibfk_1` FOREIGN KEY (`CompanyID`) REFERENCES `companies` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recruitments`
--

LOCK TABLES `recruitments` WRITE;
/*!40000 ALTER TABLE `recruitments` DISABLE KEYS */;
INSERT INTO `recruitments` VALUES ('18cd2b00-50d4-11eb-888e-a5b750478300','9277f0a0-50c7-11eb-aecb-c319e55026a3','2021-01-20 00:00:00','2021-02-20 00:00:00','ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;',50000,'ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;','2021-01-07 10:35:44','2021-01-07 10:35:44'),('46839780-50f9-11eb-9cd3-95ca5638606a','9277f0a0-50c7-11eb-aecb-c319e55026a3','2021-01-20 00:00:00','2021-02-20 00:00:00','ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;',50000,'ĐH KHTN mong muốn cộng tác với các lập trình viên Back-end có kinh nghiệm, có đam mê và nhiệt huyết trong việc phát triển sản phẩm, cung cấp các giải pháp giải quyết các bài toán liên quan đến quản lý trải nghiệm khách hàng;','2021-01-07 15:01:52','2021-01-07 15:01:52'),('b78590f0-50c7-11eb-aecb-c319e55026a3','9277f0a0-50c7-11eb-aecb-c319e55026a3','2021-01-20 00:00:00','2021-02-20 00:00:00','This is a sample recruitment',10000,'A sample requirement','2021-01-07 09:07:07','2021-01-07 09:07:07');
/*!40000 ALTER TABLE `recruitments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seekers`
--

DROP TABLE IF EXISTS `seekers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seekers` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `FullName` varchar(255) NOT NULL,
  `DateOfBirth` datetime NOT NULL,
  `PhoneNumber` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `CV` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserID` (`UserID`),
  CONSTRAINT `seekers_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seekers`
--

LOCK TABLES `seekers` WRITE;
/*!40000 ALTER TABLE `seekers` DISABLE KEYS */;
/*!40000 ALTER TABLE `seekers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_details`
--

DROP TABLE IF EXISTS `skill_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_details` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SeekerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SkillSetID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `SkillName` varchar(255) NOT NULL,
  `Level` int NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SkillName` (`SkillName`),
  KEY `SeekerID` (`SeekerID`),
  KEY `SkillSetID` (`SkillSetID`),
  CONSTRAINT `skill_details_ibfk_1` FOREIGN KEY (`SeekerID`) REFERENCES `seekers` (`id`) ON UPDATE CASCADE,
  CONSTRAINT `skill_details_ibfk_2` FOREIGN KEY (`SkillSetID`) REFERENCES `skill_sets` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_details`
--

LOCK TABLES `skill_details` WRITE;
/*!40000 ALTER TABLE `skill_details` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skill_sets`
--

DROP TABLE IF EXISTS `skill_sets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skill_sets` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SkillSetName` varchar(255) NOT NULL,
  `SkillSetDescription` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SkillSetName` (`SkillSetName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skill_sets`
--

LOCK TABLES `skill_sets` WRITE;
/*!40000 ALTER TABLE `skill_sets` DISABLE KEYS */;
/*!40000 ALTER TABLE `skill_sets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_logs`
--

DROP TABLE IF EXISTS `user_logs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_logs` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserLogDate` datetime NOT NULL,
  `UserLogDescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `UserID` (`UserID`),
  CONSTRAINT `user_logs_ibfk_1` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_logs`
--

LOCK TABLES `user_logs` WRITE;
/*!40000 ALTER TABLE `user_logs` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_logs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_types`
--

DROP TABLE IF EXISTS `user_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_types` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserTypeName` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UserTypeName` (`UserTypeName`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_types`
--

LOCK TABLES `user_types` WRITE;
/*!40000 ALTER TABLE `user_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `UserTypeID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `AccountEmail` varchar(255) DEFAULT NULL,
  `Username` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `LinkedAccount` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Username` (`Username`),
  KEY `UserTypeID` (`UserTypeID`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`UserTypeID`) REFERENCES `user_types` (`id`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('6f93c000-50c7-11eb-aecb-c319e55026a3',NULL,'sampleemail@gmail.com','wan2000','123456',NULL,'2021-01-07 09:05:06','2021-01-07 09:05:06');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `write_review_companies`
--

DROP TABLE IF EXISTS `write_review_companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `write_review_companies` (
  `UserID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `CompanyID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ReviewDate` datetime DEFAULT NULL,
  `Rating` int DEFAULT NULL,
  `ReviewDescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`UserID`,`CompanyID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `write_review_companies`
--

LOCK TABLES `write_review_companies` WRITE;
/*!40000 ALTER TABLE `write_review_companies` DISABLE KEYS */;
/*!40000 ALTER TABLE `write_review_companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `write_review_seekers`
--

DROP TABLE IF EXISTS `write_review_seekers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `write_review_seekers` (
  `UserID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `SeekerID` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `ReviewDate` datetime DEFAULT NULL,
  `Rating` int DEFAULT NULL,
  `ReviewDescription` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`UserID`,`SeekerID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `write_review_seekers`
--

LOCK TABLES `write_review_seekers` WRITE;
/*!40000 ALTER TABLE `write_review_seekers` DISABLE KEYS */;
/*!40000 ALTER TABLE `write_review_seekers` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-07 17:45:50
