import type {IProduct} from "../interfaces/IProduct.ts";
import {v4 as uuidv4} from "uuid";

export class Citron implements IProduct {
    id : string
    name : string
    unitPrice : number
    unitSell : string

    constructor(unitPrice: number) {
       this.id = uuidv4();
       this.name = 'Citron';
       this.unitPrice = unitPrice;
       this.unitSell = 'unité'
    }

    getPrice(quantity: number) {
        return this.unitPrice * quantity;
    }

    getUnit() {
        return this.unitPrice +"€/"+ this.unitSell;
    }
}

