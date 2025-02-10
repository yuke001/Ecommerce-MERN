
import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
import db from './config/db.js';

dotenv.config();
db



const PORT = process.env.PORT || 8000; 


let server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
}); 
