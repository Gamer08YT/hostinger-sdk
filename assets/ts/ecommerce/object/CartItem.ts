import {Product} from "./Product";

/**
 * Represents an item in a shopping cart.
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/Cart.html
 */
export class CartItem {
    // Store ID of Cart Server Entry.
    private id : number;

    // Store Customisation Comment of Cart Item.
    private comment : string;

    // Store Amount of Product.
    private amount : number;

    // Store Product of Cart Item.
    private product : Product;

    // Store Product Configurations (Color, Size, etc).
    private settings : Object;
}