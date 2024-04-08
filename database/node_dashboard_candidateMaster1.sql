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
-- Table structure for table `candidateMaster1`
--

DROP TABLE IF EXISTS `candidateMaster1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `candidateMaster1` (
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
  PRIMARY KEY (`canid`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `candidateMaster1`
--

LOCK TABLES `candidateMaster1` WRITE;
/*!40000 ALTER TABLE `candidateMaster1` DISABLE KEYS */;
INSERT INTO `candidateMaster1` VALUES (108,'mihir','thakkar','manager','bhavnagar','Gujrat','thakkarmihir@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','bhavnagar'),(109,'chirag','kanan','manager','bhavngar','Gujrat','chirag@esb',6352023502,364001,'Male','Merried','2001-07-05','bhavagar'),(110,'hardev','ZALA','projectmanager','RAJKOT','Gujrat','hardev@gmail.com',9313837227,364001,'Male','Unmerried','2003-07-01','RAJKOT'),(111,'thakkamirt','thakarm','flk','bhavnage','Gujrat','thakkarmihir@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','bahvnagar'),(112,'thakkamirt','thakarm','flk','bhavnage','Gujrat','thakkarmihir@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','bahvnagar'),(113,'thakkamirt','thakarm','flk','bhavnage','Gujrat','thakkarmihir@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','bahvnagar'),(114,'thakkamirt','thakarm','flk','bhavnage','Gujrat','thakkarmihir@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','bahvnagar'),(115,'suraj','parmar','manager','bhavnagar','Gujrat','suraj@gmail.com',7990167445,364001,'Male','Unmerried','2002-01-17','bhavnagae'),(116,'suraj','parmar','manager','bhavnagar','Gujrat','suraj@gmail.com',7990167445,364001,'Male','Unmerried','2002-01-17','bhavnagae'),(117,'mihir','thakarm','manager','bhavnagar','Gujrat','thakkarnihir007@gmail.com',6352023502,364001,'Male','Unmerried','2002-08-10','gaytrinagar'),(118,'yash','vacahani','devloper','bhavnagar','Gujrat','thakkarnihir007@gmail.com',6352023502,364001,'Male','Unmerried','2002-08-10','gaytrinagar'),(119,'jay','gajjar','manager','bhavnagar','Gujrat','YswAgssSdddH@ESB',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar'),(120,'suraj','parmar','manager','bhavnagar','Gujrat','suraj@gmail.com',7990167445,364001,'Male','Unmerried','2002-01-17','bhavnagae'),(121,'suraj','parmar','manager','bhavnagar','Gujrat','suraj@gmail.com',7990167445,364001,'Male','Unmerried','2002-01-17','bhavnagae'),(122,'suraj','parmar','manager','bhavnagar','Gujrat','suraj@gmail.com',7990167445,364001,'Male','Unmerried','2002-01-17','bhavnagae'),(123,'jainam','thakarm','manavger','bhavnagar','Rajsthan','modi@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar'),(124,'hardev','thakkar','manager','df','Gujrat','YswAgssSdddH@ESB',6352023502,364001,'Male','Unmerried','2002-08-10','bhavnagar'),(125,'hardev','thakkar','manager','df','Gujrat','YswAgssSdddH@ESB',6352023502,364001,'Male','Unmerried','2002-08-10','bhavnagar'),(126,'mihir','thakarm','manager','bhavnagar','Gujrat','thakkarnihir007@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar'),(127,'mihir','thakarm','manager','bhavnagar','Gujrat','thakkarnihir007@gmail.com',6352023502,364001,'Male','Merried','2002-08-10','gaytrinagar');
/*!40000 ALTER TABLE `candidateMaster1` ENABLE KEYS */;
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
