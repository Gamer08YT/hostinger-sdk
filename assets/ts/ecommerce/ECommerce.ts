import {Cart} from "./Cart";
import {Product} from "./object/Product";
import {Hostinger} from "../Hostinger";

/**
 * Represents ECommerce Features of Hostinger.
 * @class
 */
export class ECommerce {
    // Store Cart Instance.
    private cartIO = new Cart();

    // If true Products will be stored on Local Browser Storage.
    private allowStoreProductsLocal: boolean;

    /**
     * Sets the state of storing products in the browser storage.
     *
     * @param {boolean} stateIO - The new state of storing products. If true, products will be stored in the browser storage. If false, products will be removed from the browser storage.
     *
     * @return {void}
     */
    private allowStoreProducts(stateIO : boolean) : void {
        this.allowStoreProductsLocal = stateIO;

        // Remove old Data from Browser Storage.
        if(!this.allowStoreProductsLocal){
            this.removeOldProductStorage();
        }
    }

    /**
     * Retrieves the cart instance.
     *
     * @return {Cart} The cart instance.
     */
    public getCart() : Cart {
        return this.cartIO;
    }

    /**
     * Retrieves an array of products from the server.
     *
     * @return {Array<Product>} An array of products.
     */
    public getProducts() : Array<Product> {
        return this.getAllProductsFromServer();
    }

    /**
     * Fetches the checksum of a product from the API based on the given ID.
     *
     * @param {string} idIO - The ID of the product to fetch the checksum for.
     *
     * @return {string} The checksum of the product.
     */
    public getProductChecksum(idIO : string) : string {
        $.ajax(Hostinger.getAPIChannel(Product.productChecksumIO.replace("{id}", idIO)), {
            method: "GET",
            dataType: "json",
            success: (dataIO => {
                // @todo Parse Data
            })
        });


        return null;
    }

    /**
     * Retrieves the checksum of the products using an API call.
     *
     * @returns {string} The checksum of the products.
     */
    public getProductsChecksum() : string {
        $.ajax(Hostinger.getAPIChannel(Product.checksumIO), {
            method: "GET",
            dataType: "json",
            success: (dataIO => {
                // @todo Parse Data
            })
        });

        return null;
    }

    /**
     * Retrieves all products from the server.
     *
     * @returns {Array<Product>} An array containing all products retrieved from the server.
     */
    protected getAllProductsFromServer(overrideIO : boolean = false): Array<Product> {
        let arrayIO : Array<Product> = new Array();


        // Check for Override or not allowed for Local Storage.
        if(overrideIO || !this.allowStoreProductsLocal) {
            $.ajax(Hostinger.getAPIChannel(Product.urlIO), {
                method: "GET",
                dataType: "json",
                success: (dataIO => {
                    // @todo Parse Data
                    console.log(dataIO);
                })
            })
        } else {
            this.getProductsChecksum();

            //if(checksum != this.checksum...)

            // Renew Array if Checksum is Expired.
            arrayIO = this.getAllProductsFromServer(true);
        }

        // Save Products to Browser if allowed.
        if(this.allowStoreProductsLocal)
            this.saveProductsToBrowser(arrayIO);

        return arrayIO;
    }

    /**
     * Removes the old product storage from local storage.
     *
     * @function removeOldProductStorage
     *
     * @returns {void}
     */
    protected removeOldProductStorage(): void {
        localStorage.removeItem(Hostinger.getPrefix() + ".products");

        // Print Debug Message.
        Hostinger.debug("Removed old Product Entry from Local Storage.");
    }

    /**
     * Saves an array of products to the browser's localStorage.
     *
     * @param {Array<Product>} arrayIO - The array of products to be saved.
     */
    protected saveProductsToBrowser(arrayIO: Array<Product>) : void {
        localStorage.setItem(Hostinger.getPrefix() + ".products", JSON.stringify(arrayIO));
    }
}