import { Product } from "./Product.ts"

// inherit the Product class by extending it
class PhysicalProduct extends Product {
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    // create a new string with weight for physical products
    displayDetails(): string {
        return `The product '${this.name}' has a SKU: ${this.sku}, weighs ${this.weight} kg and a pre-tax price of $${this.price}.`
    }
}

const laptop = new PhysicalProduct("29I3KSKN", "Laptop", 1200, 2.5);
console.log(laptop.displayDetails());