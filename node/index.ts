import express from 'express';
import bodyparser from 'body-parser';
import router from './meals/index.js';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT;


// Middleware
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

app.use('/meals', router);



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});