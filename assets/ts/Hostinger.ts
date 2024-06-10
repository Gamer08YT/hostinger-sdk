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

    // Store Credentials of Server/Endpoint.
    public static credentialsIO : any = {
        url: "http://127.0.0.1/",
        port: 80,
        cors: false
    };

    /**
     * Creates a new instance of the constructor.
     *
     * @param {string} hostnameIO - The hostname for the IO connection.
     * @param {number} portIO - The port number for the IO connection.
     * @return {void}
     */
    constructor(hostnameIO: string, portIO: number) {
        Hostinger.credentialsIO.url = hostnameIO;
        Hostinger.credentialsIO.portIO = portIO;
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
     * @returns {Object} The Hostinger credentials object.
     */
    static getCredentials() : any {
        return Hostinger.credentialsIO;
    }

    /**
     * Fetches the API channel based on the given routeIO.
     *
     * @param {string} routeIO - The routeIO for which the API channel is to be fetched.
     * @return {string} - The API channel corresponding to the given routeIO.
     */
    static getAPIChannel(routeIO: string) {
        console.log(this.getCredentials().url  + "/internal/" + routeIO);

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

    /**
     * Handles the response received from the server.
     *
     * @param {object} dataIO - The response data received from the server.
     *
     * @return {void}
     */
    static handleResponse(dataIO: object) {
        // Print Debug Message.
        Hostinger.debug(`Received Response from Server (${dataIO}).`);
    }
}

