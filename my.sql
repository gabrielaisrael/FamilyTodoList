CREATE DATABASE todolist;

USE todolist;

CREATE TABLE members (
memberId int auto_increment,
name varchar(255) not null,
nickname varchar(255) not null,
description varchar(255) not null,
primary key (memberId)
);
CREATE TABLE tasks(
taskId int AUTO_INCREMENT,
m_id int NOT NULL,
descriptionTask varchar(255) NOT NULL,
taskDate datetime default now(),
PRIMARY KEY(taskId),
FOREIGN KEY(m_id) REFERENCES members(memberId)
);

insert into members (name, nickname, description)
values ("Gabriela", "gabi", "mather"),
("Moshe", "Mo", "father"),
("Avraham Moshe", "Avraham", "son"),
("Yehonatan Eliahu", "Yoni", "son"),
("Maayan Hodaya", "Maayani", "daughter")

select * from members;

insert into tasks (m_id, descriptionTask )
values (1, "Take the kids out of the frames"),
(1, "wash the dishes"),
(2, "Go shopping at the supermarket"),
(3, "Finish homework"),
(4, "clean the room"),
(5, "Arrange the games")

SELECT 
tasks.taskId,
tasks.descriptionTask as 'descriptionTask',
tasks.taskDate,
members.nickname as 'members'
FROM tasks
INNER JOIN members
ON tasks.m_id = members.memberId