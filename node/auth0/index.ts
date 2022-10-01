import { Router } from "express";
import { auth } from "express-openid-connect";


const authentication = Router();

const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.AUTH0_CLIENT_SECRET,
    baseURL: "http://localhost:8080/",
    clientID: process.env.AUTH0_CLIENT_ID,
    issuerBaseURL: process.env.AUTH0_DOMAIN
  };


  authentication.use(auth(config));

export default authentication;
