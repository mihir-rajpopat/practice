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
-- Table structure for table `referenceContact`
--

DROP TABLE IF EXISTS `referenceContact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `referenceContact` (
  `canid` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `contactNo` bigint NOT NULL,
  `relation` varchar(255) DEFAULT NULL,
  `rid` int NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`canid`,`contactNo`),
  UNIQUE KEY `rid` (`rid`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `referenceContact`
--

LOCK TABLES `referenceContact` WRITE;
/*!40000 ALTER TABLE `referenceContact` DISABLE KEYS */;
INSERT INTO `referenceContact` VALUES (108,'mhir',6352023502,'br',1),(109,'mhir',6352023502,'br',2),(110,'sdbv',6352023502,'fbw',3),(111,'sdbv',6352023502,'fbw',4),(112,'sdbv',6352023502,'fbw',5),(113,'sdbv',6352023502,'fbw',6),(114,'sdbv',6352023502,'fbw',7),(115,'mhir',6352023502,'fbw',8),(116,'mhir',6352023502,'fbw',9),(117,'sdbv',6352023502,'fbw',10),(118,'ddb',6352023502,'fbw',11),(119,'sdbv',6352023502,'fbw',12),(120,'mhir',6352023502,'fbw',13),(121,'mhir',6352023502,'fbw',14),(122,'mhir',6352023502,'fbw',15),(123,'sdbv',6352023502,'fbw',16),(124,'sdbv',6352023502,'fbw',17),(125,'sdbv',6352023502,'fbw',18),(126,'ndjb',1236545632,'brother',20),(126,'mhir',6352023502,'fbw',19),(127,'ndjb',1236545632,'brother',22),(127,'mhir',6352023502,'fbw',21);
/*!40000 ALTER TABLE `referenceContact` ENABLE KEYS */;
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
