import { calculateTax } from "../utils/taxCalculator.js";

export class Product {
    public static taxRate = 0.10;

    sku: string;
    name: string;
    price: number;

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    displayDetails(): string {
        return `The product '${this.name}' has a SKU: ${this.sku} and a pre-tax price of $${this.price}.`
    }
    getPriceWithTax(): number {
        return this.price;
    }
}