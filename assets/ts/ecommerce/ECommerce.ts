import {Cart} from "./Cart";

/**
 * Represents ECommerce Features of Hostinger.
 * @class
 */
export class ECommerce {
    private cartIO = new Cart();

    public getCart() {
        return this.cartIO;
    }
}