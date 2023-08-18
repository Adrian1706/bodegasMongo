import { Expose, Transform } from 'class-transformer';
import { IsDefined } from 'class-validator';

export class Bodegas{
    @Expose ({ name : 'id' })
    @IsDefined ({ message : () => { throw { status : 422, message : 'El parámetro id es obligatorio' }}})
    ID : number;

    @Expose ({ name : 'nombre' })
    @IsDefined ({ message : () => { throw { status : 422, message : 'El parámetro nombre es obligatorio' }}})
    NOM : string;

    @Expose ({ name : 'id_responsable' })
    @IsDefined ({ message : () => { throw { status : 422, message : 'El parámetro id_responsable es obligatorio' }}})
    IDF : number;

    @Expose ({ name : 'estado' })
    @IsDefined ({ message : () => { throw { status : 422, message : 'El parámetro estado es obligatorio' } }})
    EST : number;

    constructor(p1: number, p2: string, p3: number, p4: number,) {
        this.ID = p1;
        this.NOM = p2;
        this.IDF = p3;
        this.EST = p4;
    
      }
}