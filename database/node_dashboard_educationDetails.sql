-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: node_dashboard
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `educationDetails`
--

DROP TABLE IF EXISTS `educationDetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `educationDetails` (
  `eid` int NOT NULL AUTO_INCREMENT,
  `canid` int DEFAULT NULL,
  `board` varchar(255) DEFAULT NULL,
  `passingYear` year NOT NULL,
  `percentage` float NOT NULL,
  UNIQUE KEY `eid` (`eid`),
  KEY `canid` (`canid`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `educationDetails`
--

LOCK TABLES `educationDetails` WRITE;
/*!40000 ALTER TABLE `educationDetails` DISABLE KEYS */;
INSERT INTO `educationDetails` VALUES (5,108,'gseb',2018,20),(6,108,'gsheb',2020,40),(7,108,'bca',2023,25),(8,108,'dd',2002,65),(9,109,'gseb',2001,58),(10,109,'dfd',2021,56),(11,110,'gseb',2001,58),(12,110,'hsc',2002,55),(13,111,'gseb',2001,58),(14,111,'gujrata',2002,40),(15,112,'gseb',2001,58),(16,112,'gujrata',2002,40),(17,113,'gseb',2001,58),(18,113,'gujrata',2002,40),(19,114,'gseb',2001,58),(20,114,'gujrata',2002,40),(21,115,'ssc',2002,58),(22,115,'hsc',2004,25),(23,115,'mkbu',2025,63),(24,115,'ddu',2025,36),(25,116,'ssc',2002,58),(26,116,'hsc',2004,25),(27,116,'mkbu',2025,63),(28,116,'ddu',2025,36),(29,117,'gseb',2001,58),(30,117,'hsc',2021,56),(31,118,'gseb',2001,58),(32,118,'hsc',2021,56),(33,119,'gseb',2001,58),(34,119,'hsc',2021,56),(35,120,'ssc',2002,58),(36,120,'hsc',2004,25),(37,120,'mkbu',2025,63),(38,120,'ddu',2025,36),(39,121,'ssc',2002,58),(40,121,'hsc',2004,25),(41,121,'mkbu',2025,63),(42,121,'ddu',2025,36),(43,122,'ssc',2002,58),(44,122,'hsc',2004,25),(45,122,'mkbu',2025,63),(46,122,'ddu',2025,36),(47,123,'gseb',2001,58),(48,123,'hsc',2021,56),(49,124,'gseb',2002,65),(50,124,'hsc',2021,56),(51,125,'gseb',2002,65),(52,125,'hsc',2021,56),(53,126,'gseb',2001,58),(54,126,'hsc',2021,56),(55,127,'gseb',2001,58),(56,127,'hsc',2021,56);
/*!40000 ALTER TABLE `educationDetails` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 19:04:32
