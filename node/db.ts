import {Dialect, Sequelize} from "sequelize";
import * as dotenv from "dotenv";

// Load dotenv variables into process
dotenv.config();

// Load environment-variables into constants
const dbName: string = process.env.DB_NAME as string;
const dbUser: string = process.env.DB_USER as string;
const dbHost: string = process.env.DB_URI as string;
const dbDialect: Dialect = process.env.DB_DIALECT as Dialect;
const dbPassword: string = process.env.DB_PASSWORD as string;

// Instantiate a db-connection as Sequelize-Object
const sequelize: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDialect,
});

export default sequelize;