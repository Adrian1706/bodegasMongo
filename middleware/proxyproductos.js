import 'reflect-metadata';
import { Router } from "express";
import {validate} from 'class-validator';
import {plainToClass, classToPlain} from 'class-transformer';
import { productos } from "../storage/productos.js"

const proxyProductos = Router();
const Dto = Router();

proxyProductos.use((req,res,next)=>{
    if(!req.rateLimit) return;
    let {payload}= req.data;
    const { iat,exp, ...newPayload} =payload;
    payload =newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(productos, {}, { ignoreDecorators: true })));
    (!Verify) ? res.status(406).send({status:406, message:"No tienes autorización"}) : next();
});

Dto.use( async(req,res,next) => {
    try {
        let data = plainToClass(productos, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});
 
export {
    proxyInventario,
    Dto
};