import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class Bodegas {
    @Expose({ name: 'id' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El id es obligatorio`}}})
    id: number;

    @Expose({ name: 'nombre' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El nombre es obligatorio`}}})
    nombre: string;

    @Expose({ name: 'id_responsable' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El id_responsable es obligatorio`}}})
    id_responsable: number;

    @Expose({ name: 'estado' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El estado es obligatorio`}}})
    estado: number;

    @Expose({ name: 'created_by' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El created_by es obligatorio`}}})
    created_by: number;

    @Expose({ name: 'created_at' })
    @IsDefined({message: ()=>{ throw {status: 422, message: `El created_at es obligatorio`}}})
    created_at: string;


    constructor(data:Partial<Bodegas>) {
      Object.assign(this, data);
      this.id = 0;
      this.nombre = "nombre bodega";
      this.id_responsable = 0;
      this.estado = 0;
      this.created_by = 0;
      this.created_by = 0;
      this.created_at = "fecha";
    }
}