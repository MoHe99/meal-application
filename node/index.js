import express from 'express';
import router from './meals/index.js';

const app = express();
const port = 8080;


// Middleware

app.use('/meals', router);



app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});