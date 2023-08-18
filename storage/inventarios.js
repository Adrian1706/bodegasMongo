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
export class Inventario {
    constructor(data) {
        Object.assign(this, data);
        this.id = 0;
        this.id_bodega = 0;
        this.id_producto = 0;
        this.cantidad = 0;
    }
}
__decorate([
    Expose({ name: 'id' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parámetro id es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id", void 0);
__decorate([
    Expose({ name: 'id_bodega' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parámetro id de bodega es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_bodega", void 0);
__decorate([
    Expose({ name: 'id_producto' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parámetro id de producto es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "id_producto", void 0);
__decorate([
    Expose({ name: 'cantidad' }),
    IsDefined({ message: () => { throw { status: 422, message: `El parámetro cantidad es obligatoria` }; } }),
    __metadata("design:type", Number)
], Inventario.prototype, "cantidad", void 0);
