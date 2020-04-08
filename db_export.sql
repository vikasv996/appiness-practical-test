CREATE DATABASE IF NOT EXISTS `a_com` /*!40100 DEFAULT CHARACTER SET utf8 */;

DROP TABLE IF EXISTS `a_com`.`category`;
CREATE TABLE `a_com`.`category` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `date_created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `a_com`.`product`;
CREATE TABLE `a_com`.`product` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `category_id` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `date_created` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Category Data (Insert Queries)
INSERT INTO `a_com`.`category` (`id`, `name`) VALUES ('1', 'clothing');
INSERT INTO `a_com`.`category` (`id`, `name`) VALUES ('2', 'electronics');
INSERT INTO `a_com`.`category` (`id`, `name`) VALUES ('3', 'games');


-- Product Data (Insert Queries)
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('1', '1', 'Apparel');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('2', '1', 'Footwear');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('3', '1', 'Sportswear');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('4', '1', 'Traditional');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('5', '1', 'Formal Wear');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('6', '1', 'Watches');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('7', '1', 'Jewellery');


INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('8', '2', 'Mobiles');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('9', '2', 'Televisions');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('10', '2', 'Laptops');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('11', '2', 'Cameras');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('12', '2', 'Headphones');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('13', '2', 'Speakers');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('14', '2', 'Routers');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('15', '2', 'Printers');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('16', '2', 'Desktops');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('17', '2', 'Tablets');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('18', '2', 'Pen Drives');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('19', '2', 'Smart Watches');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('20', '2', 'Hard Drives');


INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('21', '3', 'Badminton');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('22', '3', 'Cycling');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('23', '3', 'Cricket');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('24', '3', 'Football');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('25', '3', 'Yoga');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('26', '3', 'Running');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('27', '3', 'Volley Ball');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('28', '3', 'Camping & Hiking');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('29', '3', 'Skating');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('30', '3', 'Swimming');
INSERT INTO `a_com`.`product` (`id`, `category_id`, `name`) VALUES ('31', '3', 'Basketball');
