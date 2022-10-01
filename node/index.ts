import express from 'express';
import bodyparser from 'body-parser';
import router from './meals/index.js';
import * as dotenv from 'dotenv';
import helmet from 'helmet';
import { auth } from 'express-openid-connect';

// Initialize server
const app = express();

// Initialize environment variables
dotenv.config();
const port: number = process.env.PORT;

const config = {
    authRequired: true,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: "http://localhost:8080/",
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN
  };

// Middleware: Third Party
app.use(helmet()); // For basic http-headers / security reasons
app.use(bodyparser.urlencoded({extended: false}));  // For parsing url-bodies
app.use(bodyparser.json()); // For parsing json-bodies

// Middleware: Own
app.use('/meals',auth(config) , router); // REST API for controlling meals


app.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.render("index", {isAuthenticated: req.oidc.isAuthenticated()});
  });

// Start server
app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});
