/**
 * Represents a product category.
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/ProductCategories.html
 * @class
 */
export class ProductCategory {
    // Store Name of Category.
    private name: string;

    // Store Description of Category.
    private description: string;

    // Store ID of Category.
    private id : number;

    // Store Parent Item.
    private parent : ProductCategory;
}