var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Expose } from 'class-transformer';
import { IsDefined } from 'class-validator';
export class Bodegas {
    constructor(p1, p2, p3, p4) {
        this.ID = p1;
        this.NOM = p2;
        this.IDF = p3;
        this.EST = p4;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El parámetro id es obligatorio' }; } }),
    __metadata("design:type", Number)
], Bodegas.prototype, "ID", void 0);
__decorate([
    Expose({ name: 'nombre' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El parámetro nombre es obligatorio' }; } }),
    __metadata("design:type", String)
], Bodegas.prototype, "NOM", void 0);
__decorate([
    Expose({ name: 'id_responsable' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El parámetro id_responsable es obligatorio' }; } }),
    __metadata("design:type", Number)
], Bodegas.prototype, "IDF", void 0);
__decorate([
    Expose({ name: 'estado' }),
    IsDefined({ message: () => { throw { status: 422, message: 'El parámetro estado es obligatorio' }; } }),
    __metadata("design:type", Number)
], Bodegas.prototype, "EST", void 0);
