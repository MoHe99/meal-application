CREATE TABLE meals (id SERIAL PRIMARY KEY, title VARCHAR NOT NULL, description VARCHAR NOT NULL, price DECIMAL NOT NULL);
INSERT INTO meals (title, description, price) VALUES ('Curry', 'Mit Reis', 3.99), ('Salat', 'Mit Essig-Öl Dressing', 2.99), ('Schnitzel', 'Mit Pommes', 5.99);
