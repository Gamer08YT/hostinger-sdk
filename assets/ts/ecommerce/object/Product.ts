import {ProductType} from "../enums/ProductType";
import {Manufacturer} from "./Manufacturer";

/**
 * Represents a product.
 *
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/Products.html
 * @class
 */
export class Product {
    // Store API Endpoint of Products.
    public static urlIO: string = "ecommerce/product";

    // Store API Endpoint of Checksum.
    public static checksumIO: string = "ecommerce/product/checksum";

    // Store API Endpoint of Product.
    public static productIO: string = "ecommerce/product/{$id}";

    // Store API Endpoint of Product Checksum.
    public static productChecksumIO: string = Product.productIO + "/checksum";

    // Store Name of Product.
    public name : string;

    // Store Short Description of Product.
    public description : string;

    // Store normal Price of Product.
    public price : number;

    // Store Type of Product.
    public type : ProductType;

    // Store Amount of Products in Warehouse.
    public stock : number;

    // Store Manufacturer of Product.
    public manufacturer : Manufacturer;

    // Store European Article Number.
    public ean : string;

    // Store Product Configurations (Slider, etc).
    public settings : Object;
}