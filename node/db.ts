import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";
dotenv.config();


// Establish database-connection
/* const sequelize = new Sequelize(dburl, {
    dialect: process.env.DB_USER,
    protocol: process.env.DB_PASSWORD,
    omitNull: true,
}); */

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_URI,
  dialect: process.env.DB_DIALECT,
});

export default sequelize;