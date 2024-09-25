import type {IProduct} from "../interfaces/IProduct.ts";
import {v4 as uuidv4} from "uuid";

export class Sugar implements IProduct {
    id : string
    name : string
    pricePerKg : number
    unitSell : string

    constructor(unitPrice: number) {
        this.id = uuidv4();
        this.name = 'Sugar'
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

