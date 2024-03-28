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
-- Table structure for table `workExperience`
--

DROP TABLE IF EXISTS `workExperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `workExperience` (
  `canid` int NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `fromDate` date NOT NULL,
  `toDate` date NOT NULL,
  `wid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`canid`,`companyName`),
  UNIQUE KEY `wid` (`wid`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `workExperience`
--

LOCK TABLES `workExperience` WRITE;
/*!40000 ALTER TABLE `workExperience` DISABLE KEYS */;
INSERT INTO `workExperience` VALUES (108,'epark','manager','2002-08-10','2002-08-11',2),(110,'epark','manager','2002-08-10','2002-08-11',3),(111,'epark','manager','2002-08-10','2002-08-11',4),(112,'epark','manager','2002-08-10','2002-08-11',5),(113,'epark','manager','2002-08-10','2002-08-11',6),(114,'epark','manager','2002-08-10','2002-08-11',7),(115,'esparkbiz','MA','2002-08-10','2002-08-11',8),(116,'esparkbiz','MA','2002-08-10','2002-08-11',9),(117,'epark','manager','2002-08-10','2002-08-11',10),(118,'epark','manager','2002-08-10','2002-08-11',11),(119,'epark','manager','2002-08-10','2002-08-11',12),(120,'esparkbiz','MA','2002-08-10','2002-08-11',13),(121,'esparkbiz','MA','2002-08-10','2002-08-11',14),(122,'esparkbiz','MA','2002-08-10','2002-08-11',15),(123,'epark','manager','2002-08-10','2002-08-11',16),(126,'epark','manager','2002-08-10','2002-08-11',17),(127,'epark','manager','2002-08-10','2002-08-11',18);
/*!40000 ALTER TABLE `workExperience` ENABLE KEYS */;
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
