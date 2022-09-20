## Table of conents

* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

## General info

This project is simple node.js application. It provides a simple API for getting, inserting, updating and deleting entries (in this case meals) into a postgressql database.

## Technologie

Project is created with:
* docker-compose version: 3.9
* postgressql version: latest
* node.js version: 18.9.30
* nodemon
* body-parser
* joi
* sequelize

## Setup

Prerequisites:
- docker (on Linux) / docker-compose (on Windows / Mac)
- node.js version 18.9.30
- a Clienttool for databases, for example like DBeaver (optional)

Run the application:
$ docker-compose up --build

Stop the application:
$ docker-compose down --volumes --rmi all --remove-orphans