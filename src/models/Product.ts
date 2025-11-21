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

const product1 = new Product("29I3KSKN", "Laptop", 1200);
console.log(product1.displayDetails());