import express from 'express';
import bodyparser from 'body-parser';
import router from './meals/index.js';
import * as dotenv from 'dotenv';
import helmet from 'helmet';

// Initialize server
const app = express();

// Initialize environment variables
dotenv.config();
const port: number = process.env.PORT;

// Middleware: Third Party
app.use(helmet()); // For basic http-headers / security reasons
app.use(bodyparser.urlencoded({extended: false}));  // For parsing url-bodies
app.use(bodyparser.json()); // For parsing json-bodies

// Middleware: Own
app.use('/meals', router); // REST API for controlling meals

// Start server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
