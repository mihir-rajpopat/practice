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
-- Table structure for table `technologyYouKnow`
--

DROP TABLE IF EXISTS `technologyYouKnow`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `technologyYouKnow` (
  `canid` int NOT NULL,
  `technology` varchar(255) NOT NULL,
  `level` varchar(20) NOT NULL,
  `tid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`canid`,`technology`),
  UNIQUE KEY `tid` (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `technologyYouKnow`
--

LOCK TABLES `technologyYouKnow` WRITE;
/*!40000 ALTER TABLE `technologyYouKnow` DISABLE KEYS */;
INSERT INTO `technologyYouKnow` VALUES (108,'mysql','Beginner',2),(108,'php','Midetor',1),(109,'php','Beginner',3),(110,'php','Beginner',4),(111,'php','Beginner',5),(112,'php','Beginner',6),(113,'php','Beginner',7),(114,'php','Beginner',8),(115,'laravel','Midetor',11),(115,'mysql','Midetor',10),(115,'oracle','Midetor',12),(115,'php','Beginner',9),(116,'laravel','Midetor',15),(116,'mysql','Midetor',14),(116,'oracle','Midetor',16),(116,'php','Beginner',13),(117,'php','Beginner',17),(118,'php','Beginner',18),(119,'php','Beginner',19),(120,'php','Beginner',20),(121,'oracle','Beginner',21),(122,'oracle','Beginner',22),(123,'php','Midetor',23),(124,'php','Beginner',24),(125,'php','Beginner',25),(126,'oracle','Beginner',26),(127,'oracle','Beginner',27);
/*!40000 ALTER TABLE `technologyYouKnow` ENABLE KEYS */;
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
