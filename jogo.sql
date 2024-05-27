-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Tempo de geração: 27/05/2024 às 17:28
-- Versão do servidor: 8.0.30
-- Versão do PHP: 8.3.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `jogos`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `jogo`
--

CREATE TABLE `jogo` (
  `id` int NOT NULL,
  `nome` varchar(100) NOT NULL,
  `preço` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Despejando dados para a tabela `jogo`
--

INSERT INTO `jogo` (`id`, `nome`, `preço`) VALUES
(1, 'Carlinhos Horse Farm', 120),
(2, 'Resident Evil 4: Remake', 250),
(3, 'Pig Man ', 20000),
(4, 'Eduardo', 4000);

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `jogo`
--
ALTER TABLE `jogo`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `jogo`
--
ALTER TABLE `jogo`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
