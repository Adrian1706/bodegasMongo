import dotenv from 'dotenv';
import express from 'express';
import appBodegas from './routers/bodegas.js';

dotenv.config();

let app = express();

app.use(express.json());
app.use("/bodegas", appBodegas);

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});