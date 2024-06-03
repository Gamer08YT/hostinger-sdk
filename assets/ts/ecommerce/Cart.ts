import {Hostinger} from "../Hostinger";

/**
 * Represents ECommerce Cart Features of Hostinger.
 * @class
 */
export class Cart {
    // Store API Endpoint of Cart.
    private static urlIO = "/internal/ecommerce/cart";

    // If true Cart will be stored on Local Browser Storage.
    private allowLocalIO: boolean;

    // Store Products in Cart.
    private itemsIO : Array<any> = new Array();

    /**
     * Set the state of allowing local IO.
     *
     * @param {boolean} stateIO - The new state of allowing local IO.
     *
     * @return {void}
     */
    private allowStoreLocal(stateIO : boolean) {
        this.allowLocalIO = stateIO;

        // Remove old Data from Browser Storage.
        if(!this.allowLocalIO){
            this.removeOldStorage();
        }
    }

    /**
     * Adds a product to the itemsIO array.
     *
     * @param {Object} itemIO - The product to be added.
     */
    public addProduct(itemIO: object) {
        this.itemsIO.push(itemIO);

        // Save to Server (optional Browser).
        this.handleSave();
    }

    /**
     * Removes the specified product from the itemsIO array.
     *
     * @param {object} itemIO - The object representing the product to be removed.
     * @return {undefined}
     */
    public removeProduct(itemIO : object) {
        delete this.itemsIO[this.itemsIO.indexOf(itemIO)];

        // Save to Server (optional Browser).
        this.handleSave();
    }


    /**
     * Retrieves the list of products.
     *
     * @param {boolean} syncIO - Specifies whether to sync data from the server before retrieving the products.
     * @return {Array} The list of products.
     */
    public getProducts(syncIO : boolean) {
        if(syncIO)
            this.syncFromServer();

        return this.itemsIO;
    }

    /**
     * Retrieves the cart data from the local storage.
     *
     * @private
     * @return {Array<any>} The cart data as an array or null if not found.
     */
    private getLocalStorage() : Array<any> {
        return JSON.parse(localStorage.getItem(Hostinger.getPrefix()  + ".cart"));
    }

    /**
     * Saves the current cart items to the browser's local storage.
     *
     * @private
     * @return {void}
     */
    protected saveToBrowser() {
        localStorage.setItem(Hostinger.getPrefix() + ".cart", JSON.stringify(this.itemsIO));
    }

    /**
     * Synchronizes data from the server.
     *
     * @private
     * @method syncFromServer
     * @returns {void}
     * @todo Sync.
     * @todo Parse Data
     */
    private syncFromServer() {
        // @todo: Sync.
        $.ajax(Hostinger.getAPIChannel(Cart.urlIO), {
            method: "GET",
            dataType: "json",
            success: (dataIO => {
                // @todo Parse Data
                console.log(dataIO);
            })
        })
    }

    /**
     * Sends the items to the server and saves them.
     *
     * @private
     * @returns {void}
     */
    protected saveToServer() {
        $.ajax(Hostinger.getAPIChannel(Cart.urlIO), {
            method: "POST",
            dataType: "json",
            data: JSON.stringify(this.itemsIO),
            success: (dataIO => {
                Hostinger.handleResponse(dataIO);
                // @todo Parse Data
                console.log(dataIO);
            })
        })
    }

    /**
     * Handles the add operation by saving the data.
     * @returns {void}
     */
    private handleSave() {
        // Only Save to Browser if allowed (Cookie Consent etc).
        if(this.allowLocalIO)
            this.saveToBrowser()

        // Save to Server.
        this.saveToServer();

        // Print Debug Message.
        Hostinger.debug("Saved Cart Array to Server"+ (this.allowLocalIO ? " and to Browser Storage" : "") +".");
    }


    /**
     * Removes the old cart entry from local storage.
     *
     * @return {void} - This method does not return a value.
     */
    protected removeOldStorage() {
        localStorage.removeItem(Hostinger.getPrefix() + ".cart");

        // Print Debug Message.
        Hostinger.debug("Removed old Cart Entry from Local Storage.");
    }
}