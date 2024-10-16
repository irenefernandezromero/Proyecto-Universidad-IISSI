--REGLA NEGOCIO-C01
DELIMITER //
CREATE OR REPLACE TRIGGER triggerMaxFotosIN
	BEFORE INSERT ON photos
	FOR EACH ROW
	BEGINsil
		DECLARE n INT;
		SET n = (SELECT COUNT(*) FROM photos
			WHERE new.userId = userId);
		IF (n >= 50) THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'Un usuario no puede subir más de 50 fotos';
		END IF;
END //
DELIMITER ;

DELIMITER //
CREATE OR REPLACE TRIGGER triggerMaxFotosUP
	BEFORE UPDATE ON photos
	FOR EACH ROW
	BEGIN
		DECLARE n INT;
		SET n = (SELECT COUNT(*) FROM photos
			WHERE new.userId = userId);
		IF (n >= 50) THEN
			SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT =
				'Un usuario no puede subir más de 50 fotos';
		END IF;
END //
DELIMITER ;


--REGLA NEGOCIO-C02

DELIMITER //
CREATE OR REPLACE TRIGGER triggerLenguajeInapropiadoIN 
	BEFORE INSERT ON photos
	FOR EACH ROW
	BEGIN 
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE palabrota ROW TYPE of inappropriateswords;
	DECLARE palabrasinapropiadas CURSOR FOR SELECT * FROM inappropriateswords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN palabrasinapropiadas;
	readloop:LOOP
   	FETCH palabrasinapropiadas INTO palabrota;
   	IF done then 
      	leave readLoop;
   	END if;
   	IF (NEW.description LIKE CONCAT('%',palabrota.word,'%')) then 
   		SIGNAL SQLSTATE '45000' SET message_text = 
            'No se pueden incluir palabras inapropiadas en la descripción';
		END IF;
    	IF (NEW.title LIKE CONCAT('%',palabrota.word,'%')) then 
    		SIGNAL SQLSTATE '45000' SET message_text = 
            'No se pueden incluir palabras inapropiadas en el título';
		END IF;
	END loop;
CLOSE palabrasinapropiadas;
END //

DELIMITER //
CREATE OR REPLACE TRIGGER triggerLenguajeInapropiadoUP 
	BEFORE UPDATE ON photos
	FOR EACH ROW
	BEGIN 
	DECLARE done BOOLEAN DEFAULT FALSE;
	DECLARE palabrota ROW TYPE of inappropriateswords;
	DECLARE palabrasinapropiadas CURSOR FOR SELECT * FROM inappropriateswords;
	DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
	OPEN palabrasinapropiadas;
	readloop:LOOP
   	FETCH palabrasinapropiadas INTO palabrota;
   	IF done then 
      	leave readLoop;
    	END if;
    	IF (NEW.description LIKE CONCAT('%',palabrota.word,'%')) then 
    		SIGNAL SQLSTATE '45000' SET message_text = 
            'No se pueden incluir palabras inapropiadas en la descripción';
		END IF;
   	IF (NEW.title LIKE CONCAT('%',palabrota.word,'%')) then 
    		SIGNAL SQLSTATE '45000' SET message_text = 
            'No se pueden incluir palabras inapropiadas en el título';
		END IF;
	END loop;
CLOSE palabrasinapropiadas;
END //



--REGLA NEGOCIO-B07 

DELIMITER //
CREATE OR REPLACE TRIGGER triggerLenguajeInapropiadoComentIN 
	BEFORE INSERT ON comments
	FOR EACH ROW
	BEGIN 
		DECLARE done BOOLEAN DEFAULT FALSE;
		DECLARE palabrota ROW TYPE of inappropriateswords;
		DECLARE palabrasinapropiadas CURSOR FOR SELECT * FROM inappropriateswords;
		DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
		OPEN palabrasinapropiadas;
		readloop:LOOP
    		FETCH palabrasinapropiadas INTO palabrota;
    		IF done then 
        		leave readLoop;
    		END if;
    		IF (NEW.comment LIKE CONCAT('%',palabrota.word,'%')) then 
    			SIGNAL SQLSTATE '45000' SET message_text = 
                'No se pueden incluir palabras inapropiadas en un comentario';
			END IF;
		END loop;
CLOSE palabrasinapropiadas;
END //

DELIMITER //
CREATE OR REPLACE TRIGGER triggerLenguajeInapropiadoComentUP
		BEFORE UPDATE ON comments
		FOR EACH ROW
		BEGIN 
		DECLARE done BOOLEAN DEFAULT FALSE;
		DECLARE palabrota ROW TYPE of inappropriateswords;
		DECLARE palabrasinapropiadas CURSOR FOR SELECT * FROM inappropriateswords;
		DECLARE CONTINUE handler FOR NOT FOUND SET done := TRUE;
		OPEN palabrasinapropiadas;
		readloop:LOOP
   		FETCH palabrasinapropiadas INTO palabrota;
   		IF done then 
       		leave readLoop;
    		END if;
    		IF (NEW.comment LIKE CONCAT('%',palabrota.word,'%')) then 
    			SIGNAL SQLSTATE '45000' SET message_text = 
                'No se pueden incluir palabras inapropiadas en un comentario';
			END IF;
		END loop;
CLOSE palabrasinapropiadas;
END //

--BORRAR FOTO CON COMENTARIO--
DELIMITER //
CREATE OR REPLACE TRIGGER triggerComentarioEnFotoDE 
	BEFORE DELETE ON photos
	FOR EACH ROW
	BEGIN 
		DECLARE Tcomentarios INT;
		SELECT COUNT(*) INTO Tcomentarios from comments C WHERE OLD.photoId= C.photoId;
		IF(Tcomentarios>=1) THEN
			SIGNAL SQLSTATE '45000' SET message_text = 
            'No se puede borrar una foto si ya tiene comentarios';
		END IF;
END //
DELIMITER ;