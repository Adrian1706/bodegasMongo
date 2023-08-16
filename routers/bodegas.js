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
});

appBodegas.post("/", async(req, res)=>{
     let result;
     try {
         result = await Bodegas.insertOne(req.body);
         res.status(201).send(result);
     } catch (error) {
         console.log(error.errInfo.details.schemaRulesNotSatisfied[0]);
         res.send();
     }
});

export default appBodegas;