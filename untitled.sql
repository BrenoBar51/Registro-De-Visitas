CREATE TABLE `visitante` (
	`visitante_id` INT NOT NULL AUTO_INCREMENT,
	`visitante_nome` varchar(100) NOT NULL,
	`visitante_idade` INT NOT NULL,
	`visitante_profissao` varchar(50) NOT NULL,
	`visitante_cidade` varchar(50) NOT NULL,
	`visitante_bairro` varchar(50) NOT NULL,
	`visitante_genero` varchar(25) NOT NULL,
	`visitante_cpf` varchar(20) NOT NULL,
	PRIMARY KEY (`visitante_id`)
);

CREATE TABLE `usuario` (
	`usuario_id` INT NOT NULL AUTO_INCREMENT,
	`usuario_email` varchar(50) NOT NULL,
	`usuario_senha` varchar(50) NOT NULL,
	`usuario_token` varchar(255),
	PRIMARY KEY (`usuario_id`)
);

INSERT INTO visitante (visitante_nome, visitante_idade, visitante_profissao, visitante_cidade, visitante_bairro, visitante_genero, visitante_cpf) VALUES
	('Breno', '19', 'desenvolvedor', 'Fortaleza', 'aldeota', "Masculino" , '70060050090'),
	('Orfeu', '19', 'desenvolvedor', 'Fortaleza', 'aldeota', "Masculino" , '60050040080'),
	('Kleber', '19', 'desenvolvedor', 'Fortaleza', 'aldeota', "Masculino" , '90030050080');


INSERT INTO usuario (usuario_email, usuario_senha) VALUES
	('breno@gmail.com', 'breno123'),
	('orfeu@gmail.com', 'orfeu123'),
	('kleber@gmail.com', 'kleber123');