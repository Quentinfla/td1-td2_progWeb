import type {IProduct} from "../interfaces/IProduct.ts";


export class Cart{

    orderLines: { product: IProduct, quantity: number }[] = [];

    add(product: IProduct, quantity: number) {
        const bsk = this.orderLines.find(bsk => bsk.product === product);
        if (!bsk) {
            this.orderLines.push({ product, quantity });
        } else {
            bsk.quantity += quantity;
        }
    }

    calculateAmountByProduct(product: IProduct): number {
        const bsk = this.orderLines.find(bsk => bsk.product === product);
        return bsk ? bsk.product.getPrice(bsk.quantity) : 0;
    }

    calculateAmount(): number {
        return this.orderLines.reduce((total, bsk) => total + bsk.product.getPrice(bsk.quantity), 0);
    }

    displayDetails(): string[] {
        return this.orderLines.map(bsk =>
            `${bsk.product.id}: ${bsk.product.name}, ${bsk.product.getUnit()}, qte : ${bsk.quantity} prix total: ${bsk.product.getPrice(bsk.quantity)} €`
        );
    }
}