SET NAMES UTF8;
DROP DATABASE IF EXISTS food;
CREATE DATABASE food CHARSET=UTF8;
USE food;
CREATE TABLE food_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(32),
    upwd VARCHAR(32),
    phone VARCHAR(11),
    email VARCHAR(32)
);
INSERT INTO food_user VALUES
(NULL,'当当',123456,13122222222,'dang@123.com'),
(NULL,'丁丁',123459,13322222222,'ding@123.com'),
(NULL,'毛毛',123455,13422222222,'mao@123.com'),
(NULL,'皮皮',123457,13522222222,'pi@123.com');