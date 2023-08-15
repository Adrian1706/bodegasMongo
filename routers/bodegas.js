import { conexion } from "../db/atlas.js";
import { Router } from "express";


const appBodegas = Router();

let db = await conexion();

let Bodegas = db.collection('bodegas');

appBodegas.get("/", async(req, res)=>{
     let db = await conexion();
     let Bodegas = db.collection('bodegas');
     let result = await Bodegas.find({}).sort({nombre:1}).toArray();
     res.send(result);
})

export default appBodegas;