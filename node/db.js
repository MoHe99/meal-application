import { Sequelize } from "sequelize";

// Establish database-connection
const sequelize = new Sequelize("postgres://postgres:postgres@node-application-postgres:5432/postgres", {
    dialect: "postgres",
    protocol: "postgres",
    omitNull: true,
});

// Test / Log database connection status
try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

export default sequelize;