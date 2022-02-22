use books_db;

create table users(
   id INT NOT NULL AUTO_INCREMENT,
   username VARCHAR(30) NOT NULL,
   email VARCHAR(30) NOT NULL ,
   password VARCHAR(100) NOT NULL,
   createdAt DATE,
   updatedAt DATE,
   PRIMARY KEY ( id )
);

select * from users;
