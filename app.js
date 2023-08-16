import dotenv from 'dotenv';
import express from 'express';
import appBodegas from './routers/bodegas.js';
import appProductos from './routers/productos.js';

dotenv.config();

let app = express();

app.use(express.json());
app.use("/bodegas", appBodegas);
app.use("/productos", appProductos);

let config = JSON.parse(process.env.MY_SERVER);

app.listen(config, ()=>{
    console.log(`http://${config.hostname}:${config.port}`);
});