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
-- Table structure for table `student_master`
--

DROP TABLE IF EXISTS `student_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `student_master` (
  `sid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=201 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_master`
--

LOCK TABLES `student_master` WRITE;
/*!40000 ALTER TABLE `student_master` DISABLE KEYS */;
INSERT INTO `student_master` VALUES (1,'Eadie'),(2,'Ursulina'),(3,'Jere'),(4,'Dania'),(5,'Ekaterina'),(6,'Alyssa'),(7,'Mildrid'),(8,'Dulce'),(9,'Sindee'),(10,'Joy'),(11,'Deirdre'),(12,'Carolina'),(13,'Sam'),(14,'Starla'),(15,'Bibby'),(16,'Dale'),(17,'Michaelina'),(18,'Calla'),(19,'Dione'),(20,'Carly'),(21,'Corly'),(22,'Sean'),(23,'Sindee'),(24,'Rhea'),(25,'Coral'),(26,'Joane'),(27,'Cyb'),(28,'Frances'),(29,'Rozele'),(30,'Max'),(31,'Vonny'),(32,'Minda'),(33,'Yolane'),(34,'Kirstin'),(35,'Mamie'),(36,'Cristine'),(37,'Gerianna'),(38,'Penelopa'),(39,'Collen'),(40,'Madalyn'),(41,'Robbi'),(42,'Jsandye'),(43,'Leia'),(44,'Therine'),(45,'Chrystel'),(46,'Nerta'),(47,'Carlie'),(48,'Konstance'),(49,'Steffane'),(50,'Aubrie'),(51,'Frank'),(52,'Keelia'),(53,'Myriam'),(54,'Kaia'),(55,'Amalie'),(56,'Annora'),(57,'Livvyy'),(58,'Correy'),(59,'Kore'),(60,'Elvira'),(61,'Ileana'),(62,'Quintina'),(63,'Lenna'),(64,'Elie'),(65,'Allis'),(66,'Noelle'),(67,'Theodora'),(68,'Dominga'),(69,'Karolina'),(70,'Riannon'),(71,'Fawne'),(72,'Edee'),(73,'Almeta'),(74,'Wendi'),(75,'Caressa'),(76,'Isa'),(77,'Briney'),(78,'Gratia'),(79,'Michaelina'),(80,'Jaclyn'),(81,'Ida'),(82,'Clo'),(83,'Quintina'),(84,'Ricky'),(85,'Cyndie'),(86,'Neila'),(87,'Karena'),(88,'Tiffie'),(89,'Nollie'),(90,'Ardeen'),(91,'Annabela'),(92,'Roberta'),(93,'Hyacinthe'),(94,'Ilse'),(95,'Fanchon'),(96,'Ofilia'),(97,'Arabel'),(98,'Brandise'),(99,'Adriana'),(100,'Elvira'),(101,'Dorthy'),(102,'Lucille'),(103,'Dede'),(104,'Candi'),(105,'Doro'),(106,'Asia'),(107,'Maryellen'),(108,'Monika'),(109,'Alyda'),(110,'Lonnie'),(111,'Lilith'),(112,'Andree'),(113,'Vere'),(114,'Carree'),(115,'Max'),(116,'Pamella'),(117,'Sharlene'),(118,'Delilah'),(119,'Orsola'),(120,'Sindee'),(121,'Ebonee'),(122,'Orelia'),(123,'Priscilla'),(124,'Sissy'),(125,'Corry'),(126,'Sashenka'),(127,'Coral'),(128,'Dominga'),(129,'Dagmar'),(130,'Vevay'),(131,'Hyacinthe'),(132,'Ketti'),(133,'Selia'),(134,'Lorne'),(135,'Miquela'),(136,'Elora'),(137,'Mahalia'),(138,'Kial'),(139,'Riannon'),(140,'Rori'),(141,'Ebonee'),(142,'Delilah'),(143,'Jordan'),(144,'Kirstin'),(145,'Bibby'),(146,'Concettina'),(147,'Jemie'),(148,'Ezmeralda'),(149,'Paulita'),(150,'Mahalia'),(151,'Gerrie'),(152,'Dale'),(153,'Fred'),(154,'Blake'),(155,'Linzy'),(156,'Constance'),(157,'Donnie'),(158,'Candi'),(159,'Suzette'),(160,'Wendi'),(161,'Clarice'),(162,'Christy'),(163,'Sara-Ann'),(164,'Cassondra'),(165,'Veda'),(166,'Nataline'),(167,'Bibby'),(168,'Roslyn'),(169,'Glenda'),(170,'Randa'),(171,'Robbi'),(172,'Karly'),(173,'Lacie'),(174,'Philis'),(175,'Nadine'),(176,'Delilah'),(177,'Genevra'),(178,'Georgina'),(179,'Annice'),(180,'Helena'),(181,'Jere'),(182,'Julieta'),(183,'Gale'),(184,'Merle'),(185,'Gloria'),(186,'Althea'),(187,'Lynde'),(188,'Ruthe'),(189,'Gale'),(190,'Marsiella'),(191,'Lenna'),(192,'Jennica'),(193,'Max'),(194,'Gratia'),(195,'Beatriz'),(196,'Shaylyn'),(197,'Candy'),(198,'Kate'),(199,'Georgina'),(200,'Bobbi');
/*!40000 ALTER TABLE `student_master` ENABLE KEYS */;
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
