
import http from 'http';
import app from './app.js';

const PORT = process.env.PORT || 8000; 


let server = http.createServer(app);

server.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT} in ${process.env.NODE_ENV} mode.`);
}); 
