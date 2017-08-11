DROP DATABASE IF EXISTS moviesdb;

CREATE DATABASE moviesdb;

use moviesdb;

CREATE TABLE movies (
  id int PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title TEXT
);
