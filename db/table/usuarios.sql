-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 05-07-2019 a las 12:38:02
-- Versión del servidor: 5.7.26
-- Versión de PHP: 7.2.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `login_gragga`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL,
  `clave` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `clave`) VALUES
(1, 'gabriela', 'gabrielamartinez0908@hotmail.com', '$2y$10$ivwhnTUaBgrwQe6xbvMG5evCnXZz28N0ieTVkbmWekM6kouQ1EjQ.'),
(2, 'fede', 'grliberatore@gmail.com', '$2y$10$eWVRhVcY5AjnX8kZyWTdL..eXyA8aAe0KFUezYpOjwc.0knKUx8uK'),
(3, 'cristian', 'garemar0908@hotmail.com', '$2y$10$wOWM.CChfxt1lNzq6Bl.zO9qZk3Jm8br2NhV5WEZBVJ.APNg69Gq.'),
(4, 'federico', 'feduff@gmail.com', '$2y$10$0nOcRTcAoxwXMc09tyHRmuHy8y84QnREwk.fwKr6dLMuFDgC8xbJe'),
(5, 'ffff', 'ccc@gmail.com', '$2y$10$QaM7Xw9iUIyFrZ6urmweM.QrRxddtrC5TmsT2XM1q8FtIVD1XCo.a'),
(6, 'karin', 'karin@gmail.com', '$2y$10$8k9gSwodVsr3WeCNMq/aFur4cz8Rq7f/hK5QS2KJrzgZrc1Kxyk8G');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
