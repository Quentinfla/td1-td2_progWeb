export interface IProduct {
    id: string
    name: string
    getPrice(quantity: number): number
    getUnit() : string
}
