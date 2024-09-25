import type {IProduct} from "../interfaces/IProduct.ts";
import {v4 as uuidv4} from "uuid";

export class OliveOil implements IProduct {
    id : string
    name : string
    pricePerLiter : number
    unitSell : string

    constructor(unitPrice: number) {
        this.id = uuidv4();
        this.name = 'OliveOil';
        this.pricePerLiter = unitPrice;
        this.unitSell = 'L'
    }

    getPrice(quantity: number) {
        return this.pricePerLiter * quantity;
    }

    getUnit() {
        return this.pricePerLiter +"€/"+ this.unitSell;
    }
}

