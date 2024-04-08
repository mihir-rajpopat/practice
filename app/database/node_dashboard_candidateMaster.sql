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
-- Table structure for table `candidateMaster`
--

DROP TABLE IF EXISTS `candidateMaster`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidateMaster` (
  `canid` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(40) NOT NULL,
  `lname` varchar(40) NOT NULL,
  `designation` varchar(255) NOT NULL,
  `city` varchar(30) NOT NULL,
  `state` varchar(40) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNo` bigint NOT NULL,
  `zipCode` int NOT NULL,
  `gender` varchar(20) NOT NULL,
  `relationship` varchar(30) NOT NULL,
  `dob` date NOT NULL,
  `add1` varchar(1000) NOT NULL,
  `add2` varchar(1000) DEFAULT NULL,
  PRIMARY KEY (`canid`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidateMaster`
--

LOCK TABLES `candidateMaster` WRITE;
/*!40000 ALTER TABLE `candidateMaster` DISABLE KEYS */;
INSERT INTO `candidateMaster` VALUES (2,'mihir','thakarm','manager','bhavnagar','Rajsthan','thakkarnihir007@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(3,'mihir','thakarm','manager','bhavnagar','Gujrat','YASH@ESB',6352023502,364001,'Female','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(4,'mihir','thakarm','manager','bhavnagar','Gujrat','YAgSH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(5,'mihir','thakarm','manager','bhavnagar','Gujrat','YAgSdH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(6,'mihir','thakarm','manager','bhavnagar','Gujrat','YsAgSdH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(7,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgSdH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(8,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgSddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(9,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsSddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(10,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgssSddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(11,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgssSdddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(12,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgssSxdddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(13,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsSxdddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(14,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsSxddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(15,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdssSxddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(16,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsdsSxddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(17,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsdsSdxddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(18,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsdsSdxdsdddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(19,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsdsSdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(20,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(21,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdsQdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(22,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdXDsQdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(23,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdXDsQSdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(24,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdXDSsQSdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(25,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdXDSSsQSdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar'),(26,'mihir','thakarm','manager','bhavnagar','Gujrat','YswAgsdXDSSsSQSdsSsdxdsddddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar','gaytrinagar');
/*!40000 ALTER TABLE `candidateMaster` ENABLE KEYS */;
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
