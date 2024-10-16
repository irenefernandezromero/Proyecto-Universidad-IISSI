
INSERT INTO Photos
VALUES
    (1, 'Amigos', 'Buena tarde la de ayer.', '2012-04-23 18:25:43', './images/foto1.jpg', 'Public', '1'),
    (2, 'Paisaje', 'Preciosas vistas desde Irlanda.', '2013-04-23 18:21:43', './images/foto2.jpg', 'Public', '1'),
    (3, 'Flor', 'Mirad que preciosidad de flor.', '2020-04-23 18:20:43', './images/foto3.jpg', 'Public', '2'),
    (4, 'Lectura', 'Leyendo en mis ratos libres.', '2012-04-23 18:25:43', './images/foto4.jpg', 'Public', '2'),
    (5, 'Animal', 'Tigre blanco.', '2013-04-23 18:21:43', './images/foto5.jpg', 'Public', '3'),
    (6, 'Merienda', 'Preparando unos ricos batidos.', '2020-04-23 18:20:43', './images/foto6.jpg', 'Public', '3');
  

INSERT INTO Users
VALUES
   (1, 'Pablo', 'Perez', '123456789', 'pabloperez01@us.es', 'pablitoperez', 'pbkdf2:sha256:150000$gCul5Yru$b52b8c9fa18e5313aba9d96cc6f5812499be0807aa2e79ec231aded9f1bf91b0', './images/foto1.jpg'),
	(2, 'Nerea', 'Ramirez', '147852369', 'nereaaa01@us.es', 'nerea01', 'pbkdf2:sha256:150000$iomTJuJt$825d0c58c350aa3543153eee2e47b700d20d914179c93f1f7232a7fee77a2cbd', './images/foto2.jpg'),
	(3, 'Marina', 'Romero', '987654321', 'mariro@us.es', 'mariro01', 'pbkdf2:sha256:150000$wXq2mnyP$d27cea02f43341b433b952a8afb62e65b50f5faded716246bc453471837fa710', './images/foto3.jpg'),
	(4, 'Lola', 'Fernandez', '159736248', 'lola@us.es', 'lola', 'pbkdf2:sha256:150000$ig1thcoq$6d2fb9b89ba82a9210b230c28a611d60fb3d8b46dfbdc2848996e21f71056ac7', './images/foto4.jpg'),
	(5, 'Juan', 'Garcia', '357896241', 'juangar@us.es', 'juangarci', 'pbkdf2:sha256:150000$Z6YKrNzx$fdfec9ac3e65d101b3272a2b51bd8803ca9a1c6022e7d33d44e976ecbbb5435b', './images/foto5.jpg'),
	(6, 'Isabel', 'Trujillo', '456789123', 'isatruji@us.es', 'isatruji', 'pbkdf2:sha256:150000$ceU0XBaB$3abba60c2367160d6b86819eff34141c9d6070a6630b191b322ae2f5fbb24891', './images/foto6.jpg');
	
INSERT INTO Comments
VALUES
    (1, '2012-04-23 18:25:43', 'Qué bien nos lo pasamos!!', 1, 2),
    (2, '2012-04-23 18:25:43', 'Hay que repetir!!', 1, 3),
    (3, '2013-04-23 18:21:43', 'Qué bonito!', 2, 2),
    (4, '2020-04-23 18:20:43', 'Muy chula!', 3, 3),
    (5, '2012-04-23 18:25:43', '¿Qué libro es?', 4, 1),
    (6, '2012-04-23 18:25:43', 'Yo también fui al zoo hace poco!', 5, 2),
    (7, '2012-04-23 18:25:43', 'Tienen muy buena pinta!', 6, 2);

INSERT INTO inappropriateswords(word)
VALUES
	('subnormal'), ('hijo de puta'), ('hija de puta'), ('idiota'), ('cabron'),('cabrona'), ('guarra'), ('gilipollas'), ('zorra'), ('capullo'),
    ('capulla'), ('tus muertos'), ('perra'), ('mongola'), ('subnormal');