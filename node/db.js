import { Sequelize } from "sequelize";

// Establish database-connection
const sequelize = new Sequelize("postgres://postgres:postgres@node-application-db-1:5432/postgres", {
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {},
});

// Test / Log database connection status
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;