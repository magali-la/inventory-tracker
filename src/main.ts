import { Product } from "./models/Product.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { DigitalProduct } from "./models/DigitalProduct.js";

const product1 = new Product("29I3KSKN", "Laptop", 1200);
console.log(product1.displayDetails());

const laptop = new PhysicalProduct("29I3KSKN", "Laptop", 1200, 2.5);
console.log(laptop.displayDetails());
// get the price of this product which uses the calculate tax utility function
console.log(`The final price of this product with tax is $${laptop.getPriceWithTax()}.`);

const ebook = new DigitalProduct("28ELBOOK", "E-book", 19.00, 1.5);
console.log(ebook.displayDetails());