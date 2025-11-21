import { Product } from "./Product.js"

// inherit the Product class by extending it
class DigitalProduct extends Product {
    fileSize: number;

    constructor(sku: string, name: string, price: number, fileSize: number) {
        super(sku, name, price);
        this.fileSize = fileSize;
    }

    // create a new string with file size for digital products
    displayDetails(): string {
        return `The product '${this.name}' has a SKU: ${this.sku}, is ${this.fileSize} MB and a price of $${this.price}.`
    }
}

const laptop = new DigitalProduct("28ELBOOK", "E-book", 19.00, 1.5);
console.log(laptop.displayDetails());