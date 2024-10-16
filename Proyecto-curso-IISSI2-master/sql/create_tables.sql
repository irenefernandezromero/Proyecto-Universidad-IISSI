DROP TABLE IF EXISTS Photos;
DROP TABLE IF EXISTS Users;
DROP TABLE IF EXISTS Valorations;
DROP TABLE IF EXISTS Comments;
DROP TABLE IF EXISTS InappropriatesWords;



CREATE TABLE Photos (
    photoId INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(128) NOT NULL,
    description VARCHAR(512) NOT NULL,
    date DATETIME DEFAULT CURRENT_TIMESTAMP,
    url VARCHAR(512) NOT NULL,
    visibility VARCHAR(16) NOT NULL,
    userId INT NOT NULL,
    PRIMARY KEY (photoId),
    CONSTRAINT validVisibility CHECK (visibility IN ('Public','Private'))
);

CREATE TABLE Users (
    userId INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    firstName VARCHAR(128) NOT NULL,
    lastName VARCHAR(128) NOT NULL,
    telephone VARCHAR(32) NOT NULL,
    email VARCHAR (128) NOT NULL UNIQUE,
    username VARCHAR(64) NOT NULL,
    password VARCHAR(256) NOT NULL,
    avatarUrl VARCHAR(512)
);

CREATE TABLE Valorations (
        valorationId INT NOT NULL AUTO_INCREMENT,
        photoId INT NOT NULL,
        userId INT NOT NULL,
		date DATETIME DEFAULT CURRENT_TIMESTAMP,
        value INT NOT NULL,
        FOREIGN KEY(userId) REFERENCES Users(userId),
        FOREIGN KEY(photoId) REFERENCES Photos(photoId),
        PRIMARY KEY (valorationId),
        UNIQUE (photoId, userId),
        CONSTRAINT invalidValue CHECK (VALUE>=0 AND VALUE<=5)
);


CREATE TABLE Comments (
        commentId INT NOT NULL AUTO_INCREMENT,
        date DATETIME DEFAULT CURRENT_TIMESTAMP,
        comment VARCHAR(512) NOT NULL,
        photoId INT NOT NULL,
        userId INT NOT NULL,
        FOREIGN KEY(userId) REFERENCES Users(userId),
        FOREIGN KEY(photoId) REFERENCES Photos(photoId),
        PRIMARY KEY (commentId)
);

CREATE TABLE InappropriatesWords (
        inappropriateWordId INT NOT NULL AUTO_INCREMENT,
        word VARCHAR(48) NOT NULL,
        PRIMARY KEY (inappropriateWordId)
);
