import {ECommerce} from "./ecommerce/ECommerce";
import {Hosting} from "./hosting/Hosting";

/**
 * Represents the Hostinger SDK class.
 */
export class Hostinger {
    // Store ECommerce Instance.
    private ecommerceIO: ECommerce = new ECommerce();

    // Store Hosting Instance.
    private hostingIO: Hosting = new Hosting();

    /**
     * Object representing the credentials for I/O operations.
     *
     * @typedef {Object} CredentialsIO
     * @property {string} url - The URL for the I/O operations.
     */
    public static credentialsIO = {
        url: "127.0.0.1"
    }

    /**
     * Retrieves the ecommerceIO object.
     *
     * @return {Object} - The ecommerceIO object.
     */
    public getECommerce() : ECommerce {
        return this.ecommerceIO;
    }

    /**
     * Retrieves the hosting information.
     *
     * @returns {Object} The hosting information.
     */
    public getHosting() : Hosting {
        return this.getHosting();
    }

    /**
     * Returns the prefix used by Hostinger.
     *
     * @return {string} The prefix used by Hostinger.
     */
    static getPrefix() {
        return "hostinger";
    }

    /**
     * Retrieves the Hostinger credentials.
     *
     * @returns {Object} - The Hostinger credentials object.
     */
    static getCredentials() {
        return Hostinger.credentialsIO;
    }

    /**
     * Fetches the API channel based on the given routeIO.
     *
     * @param {string} routeIO - The routeIO for which the API channel is to be fetched.
     * @return {string} - The API channel corresponding to the given routeIO.
     */
    static getAPIChannel(routeIO: string) {
        return this.getCredentials().url  + "/internal/" + routeIO;
    }

    /**
     * Write a debug message to console.
     * @param {string} messageIO - The message to be displayed in console.
     * @return {undefined}
     */
    static debug(messageIO : string) {
        console.debug(messageIO);
    }
}

