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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `uid` int NOT NULL AUTO_INCREMENT,
  `firstname` varchar(45) DEFAULT NULL,
  `lastname` varchar(45) DEFAULT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) DEFAULT NULL,
  `active` varchar(200) DEFAULT NULL,
  `solt` varchar(45) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(45) DEFAULT 'inactive',
  PRIMARY KEY (`uid`,`email`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (38,'mihir','thakkar','thakkarmihir007@gmail.com','3542fbdd86c17d6c40635301ec515084','8nhnWYxS5UJ8','3eWW','2024-03-21 07:38:28','inactive'),(46,'mihir','thakkar','mihir@esb','845042d7927d9fce4804e34eb86a114a','F8aUEoSAOHfH','x0jb','2024-03-22 13:04:49','active'),(47,'demo','mode','demo@gmail.com','fe967f7c8c1061675df4901a9a0bd231','GVphj0FNMPrL','VuVB','2024-03-28 06:21:16','inactive'),(48,'demo','mode','demo1@gmail.com','a580d2c2cc9dcf36c47da4b72b353324','M6KZdGlIBURJ','fRog','2024-03-28 06:28:37','inactive'),(49,'demo','mode','demo2@gmail.com','22105f75f26548742aee0e5db11e19da','hBd930rWA2bK','TWQG','2024-03-28 06:29:20','inactive'),(50,'demo','omed','demo123@demo.com','4c38764fdb0eff5122f153598b80ac08','lI3pNGETiDA3','KblR','2024-03-28 06:36:38','active'),(51,'chirag','kanani','chirag@esb','94e287171c4e046625619d14cd1df9bf','YKvrWXa9PWux','QjLo','2024-03-28 06:39:58','active'),(52,'hardevsinh','zala','hbzala08@gmail.com','6eb0b555c4e911f9241b0c7a26416336','yeGoR8pUPHmS','OIXA','2024-03-28 07:05:31','active'),(53,'chirag','kanani','chiragkanani2003@gmail.com','d5aea107b23e7e54a430600acb124e90','httiix6d3Pmc','b34W','2024-03-28 09:09:38','active'),(54,'yashvi','ghetiya','yashvi@esb','ebf6b2c61f1169ea23e7ae3134531ab9','O5paVRp0A2h5','AIRF','2024-03-28 11:05:04','active');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
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
