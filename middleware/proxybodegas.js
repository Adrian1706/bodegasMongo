import 'reflect-metadata';
import { Router } from "express";
import {validate} from 'class-validator';
import {plainToClass, classToPlain} from 'class-transformer';
import { Bodegas } from "../storage/bodegas.js"

const proxyVerify = Router();
const DTO = Router();

proxyVerify.use((req,res,next)=>{
    if(!req.rateLimit) return;
    let {payload}= req.data;
    const { iat,exp, ...newPayload} =payload;
    payload =newPayload;
    let Clone = JSON.stringify(classToPlain(plainToClass(Bodegas, {}, { ignoreDecorators: true })));
    (!Verify) ? res.status(406).send({status:406, message:"No tienes autorización"}) : next();
});

DTO.use( async(req,res,next) => {
    try {
        let data = plainToClass(Bodegas, req.body);
        await validate(data);
        req.body = JSON.parse(JSON.stringify(data));
        req.data = undefined;
        next();
    } catch (err) {
        res.status(err.status).send(err)
    }
});

export {
    proxyVerify,
    DTO
};