import { Product } from "./Product.js";
export declare class PhysicalProduct extends Product {
    weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    displayDetails(): string;
    getPriceWithTax(): number;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map