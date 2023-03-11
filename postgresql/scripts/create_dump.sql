CREATE TABLE meals (
    id SERIAL PRIMARY KEY,
    title VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    price DECIMAL NOT NULL
);

CREATE TABLE bookings (
    user_id VARCHAR,
    meal_id INTEGER,
    PRIMARY KEY(user_id, meal_id),
    CONSTRAINT fk_meal
        FOREIGN KEY(meal_id)
            REFERENCES meals(id)
);


INSERT INTO meals (title, description, price)
VALUES ('Curry', 'Mit Reis', 3.99),
        ('Salat', 'Mit Essig-Öl Dressing', 2.99),
        ('Schnitzel', 'Mit Pommes', 5.99);
