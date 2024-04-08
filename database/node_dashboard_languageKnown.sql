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
-- Table structure for table `languageKnown`
--

DROP TABLE IF EXISTS `languageKnown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languageKnown` (
  `canid` int NOT NULL,
  `sid` int DEFAULT NULL,
  `language` varchar(255) NOT NULL,
  `canRead` tinyint(1) DEFAULT NULL,
  `canWrite` tinyint(1) DEFAULT NULL,
  `canSpeak` tinyint(1) DEFAULT NULL,
  `lid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`canid`,`language`),
  UNIQUE KEY `lid` (`lid`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languageKnown`
--

LOCK TABLES `languageKnown` WRITE;
/*!40000 ALTER TABLE `languageKnown` DISABLE KEYS */;
INSERT INTO `languageKnown` VALUES (108,NULL,'gujrati',0,1,1,2),(108,NULL,'hindi',1,0,0,1),(109,NULL,'hindi',0,0,1,3),(110,NULL,'english',0,1,0,6),(110,NULL,'gujrati',0,1,0,5),(110,NULL,'hindi',0,1,1,4),(111,NULL,'hindi',1,0,0,7),(112,NULL,'hindi',1,0,0,8),(113,NULL,'hindi',1,0,0,9),(114,NULL,'hindi',1,0,0,10),(115,NULL,'gujrati',1,0,0,12),(115,NULL,'hindi',1,0,0,11),(116,NULL,'gujrati',1,0,0,14),(116,NULL,'hindi',1,0,0,13),(117,NULL,'hindi',1,0,0,15),(118,NULL,'hindi',1,0,0,16),(119,NULL,'hindi',1,0,0,17),(120,NULL,'hindi',1,0,0,18),(121,NULL,'gujrati',1,0,0,19),(122,NULL,'gujrati',1,0,0,20),(123,NULL,'hindi',0,1,0,21),(124,NULL,'hindi',1,0,0,22),(125,NULL,'hindi',1,0,0,23),(126,NULL,'gujrati',1,0,0,24),(127,NULL,'gujrati',1,0,0,25);
/*!40000 ALTER TABLE `languageKnown` ENABLE KEYS */;
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
