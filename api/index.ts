import express, { Express } from 'express';

import bodyparser from 'body-parser';
import cors from 'cors';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { auth } from 'express-oauth2-jwt-bearer';

import mealsRouter from './meals/index';
import bookingsRouter from './bookings/index';

// Load environment variables into process.env
dotenv.config();
const port = process.env.EXPRESS_SYSTEM_PORT;

// Initialize express server
const app: Express = express();

const jwtCheck = auth({
	audience: 'https://node-application/api',
	issuerBaseURL: 'https://mh-wbdv.eu.auth0.com/',
	tokenSigningAlg: 'RS256',
});

//Third Party Middleware
app.use(bodyparser.urlencoded({ extended: false })); // For parsing url-bodies
app.use(bodyparser.json()); // For parsing json-bodies
app.use(
	helmet({
		crossOriginResourcePolicy: false,
	}),
); // For basic http-headers / security reasons
app.use(cors());
app.use(jwtCheck);

//Own Middleware
app.use('/meals', mealsRouter); // REST API for controlling meals
app.use('/bookings', bookingsRouter);

// Start server
app.listen(port, () => {
	console.log(`Server listening on http://localhost:${port}`);
});
