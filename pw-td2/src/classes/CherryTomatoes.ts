import type {IProduct} from "../interfaces/IProduct.ts";
import {v4 as uuidv4} from "uuid";

export class CherryTomatoes implements IProduct {
    id : string
    name : string
    pricePerKg : number
    unitSell : string

    constructor(unitPrice: number) {
        this.id = uuidv4();
        this.name = 'Cherry Tomatoes';
        this.pricePerKg = unitPrice;
        this.unitSell = 'kg'
    }

    getPrice(quantity: number) {
        return this.pricePerKg * quantity;
    }

    getUnit() {
        return this.pricePerKg +"€/"+ this.unitSell;
    }
}

