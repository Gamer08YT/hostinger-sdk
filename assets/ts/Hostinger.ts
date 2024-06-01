import {ECommerce} from "./ecommerce/ECommerce";
import {Hosting} from "./hosting/Hosting";

class Hostinger {
    // Store Debug State.
    public static debugIO : boolean = false;

    // Store ECommerce Instance.
    private ecommerceIO: ECommerce = new ECommerce();

    // Store Hosting Instance.
    private hostingIO: Hosting = new Hosting();

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
}

