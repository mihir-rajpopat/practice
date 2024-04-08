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
-- Table structure for table `preference`
--

DROP TABLE IF EXISTS `preference`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `preference` (
  `canid` int NOT NULL,
  `preferedLocation` varchar(255) NOT NULL,
  `noticePeriod` int NOT NULL,
  `expectedCTC` float NOT NULL,
  `currentCTC` float NOT NULL,
  `department` varchar(40) NOT NULL,
  `pid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`canid`),
  UNIQUE KEY `pid` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `preference`
--

LOCK TABLES `preference` WRITE;
/*!40000 ALTER TABLE `preference` DISABLE KEYS */;
INSERT INTO `preference` VALUES (108,'Rajkot',10,200,10,'marketing',1),(109,'Rajkot',200,200,10,'development',2),(110,'Rajkot',200,200,10,'marketing',3),(111,'',55,55,200,'development',4),(112,'',55,55,200,'development',5),(115,'Ahmedabad',20,10,25,'development',6),(116,'Ahmedabad',20,10,25,'development',7),(117,'Ahmedabad',1,5,3,'development',8),(118,'Ahmedabad',1,5,3,'development',9),(119,'Ahmedabad',1,5,200,'development',10),(120,'Rajkot',20,10,25,'development',11),(121,'Rajkot',20,10,25,'development',12),(122,'Rajkot',20,10,25,'development',13),(123,'Rajkot',200,25,10,'design',14),(125,'Rajkot',25,25,200,'development',15),(126,'Ahmedabad',1,55,3,'design',16),(127,'Ahmedabad',1,55,3,'design',17);
/*!40000 ALTER TABLE `preference` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 19:04:31
