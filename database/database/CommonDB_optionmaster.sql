-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: CommonDB
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
-- Table structure for table `optionmaster`
--

DROP TABLE IF EXISTS `optionmaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `optionmaster` (
  `option_id` int NOT NULL AUTO_INCREMENT,
  `sid` int DEFAULT NULL,
  `option_key` varchar(255) NOT NULL,
  `option_value` varchar(255) NOT NULL,
  PRIMARY KEY (`option_id`),
  UNIQUE KEY `option_id` (`option_id`),
  UNIQUE KEY `option_key` (`option_key`),
  UNIQUE KEY `option_value` (`option_value`),
  KEY `sid` (`sid`),
  CONSTRAINT `optionmaster_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `selectmaster` (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optionmaster`
--

LOCK TABLES `optionmaster` WRITE;
/*!40000 ALTER TABLE `optionmaster` DISABLE KEYS */;
INSERT INTO `optionmaster` VALUES (1,1,'Male','Male'),(2,1,'Female','Female'),(3,1,'Other','Other'),(4,2,'Unmerried','Unmerried'),(5,2,'Merried','Merried'),(6,2,'Seperated','Seperated'),(7,3,'hindi','hindi'),(8,3,'gujrati','gujrati'),(9,3,'english','english'),(10,4,'php','php'),(11,4,'mysql','mysql'),(12,4,'laravel','laravel'),(13,4,'oracle','oracle'),(16,6,'development','development'),(17,6,'design','design'),(18,6,'marketing','marketing'),(19,10,'Ahmedabad','Ahmedabad'),(20,10,'Rajkot','Rajkot');
/*!40000 ALTER TABLE `optionmaster` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-28 18:20:03
