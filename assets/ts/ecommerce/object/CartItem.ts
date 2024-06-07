import {Product} from "./Product";

/**
 * Represents an item in a shopping cart.
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/Cart.html
 */
export class CartItem {
    // Store ID of Cart Server Entry.
    public id : number;

    // Store Customisation Comment of Cart Item.
    public comment : string;

    // Store Amount of Product.
    public amount : number;

    // Store Product of Cart Item.
    public product : Product;

    // Store Product Configurations (Color, Size, etc).
    public settings : Object;
}