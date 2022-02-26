create database books_db;
use books_db;

create table books(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(20) NOT NULL,
   price DOUBLE ,
   author VARCHAR(30) ,
   published DATE NOT NULL,
   publisher VARCHAR(20),
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY ( id )
);

drop table books;

create table books(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(20) NOT NULL,
   price DOUBLE ,
   author VARCHAR(30) ,
   authorId INT NOT NULL,
   published DATE NOT NULL,
   publisher VARCHAR(20),
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY ( id ),
   FOREIGN KEY ( authorId ) REFERENCES USERS(id)
);

insert into books values 
	(1,'My First Book', 599.99, 'Kumar Mohit', 1, 
    CURDATE(), 'AMD Book House', 
    CURDATE(), CURDATE()
    );
select * from books;