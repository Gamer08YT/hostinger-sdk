import {ProductType} from "../enums/ProductType";
import {Manufacturer} from "./Manufacturer";

/**
 * Represents a product.
 *
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/Products.html
 * @class
 */
export class Product {
    // Store Name of Product.
    private name : string;

    // Store Short Description of Product.
    private description : string;

    // Store normal Price of Product.
    private price : number;

    // Store Type of Product.
    private type : ProductType;

    // Store Amount of Products in Warehouse.
    private stock : number;

    // Store Manufacturer of Product.
    private manufacturer : Manufacturer;

    // Store European Article Number.
    private ean : string;

    // Store Product Configurations (Slider, etc).
    private settings : Object;
}