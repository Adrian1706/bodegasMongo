import {  Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class Inventario{
    @Expose ({ name: 'id' })
    @IsDefined ({ message: () => { throw { status: 422, message: `El parámetro id es obligatoria` }}})
    id: number;

    @Expose ({ name: 'id_bodega' })
    @IsDefined ({ message: () => { throw { status: 422, message: `El parámetro id de bodega es obligatoria` }}})
    id_bodega: number;

    @Expose ({ name: 'id_producto' })
    @IsDefined ({ message: () => { throw { status: 422, message: `El parámetro id de producto es obligatoria` }}})
    id_producto : number;

    @Expose ({ name: 'cantidad' })
    @IsDefined ({ message: () => { throw { status: 422, message: `El parámetro cantidad es obligatoria` }}})
    cantidad : number;

    constructor (data:Partial<Inventario>){
        Object.assign(this, data);
        this.id = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
    }
}