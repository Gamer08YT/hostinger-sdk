/**
 * Represents a product category.
 * @javadoc https://javadoc.byte-store.de/de/bytestore/hostinger/entity/ecommerce/ProductCategories.html
 * @class
 */
export class ProductCategory {
    // Store Name of Category.
    public name: string;

    // Store Description of Category.
    public description: string;

    // Store ID of Category.
    public id : number;

    // Store Parent Item.
    public parent : ProductCategory;
}