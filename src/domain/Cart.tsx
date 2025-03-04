import Product from "./Product";

class Cart {

    products: Product[]

    constructor(products: Product[] = []) {
        this.products = products;
    }

    size(): number {
        return this.products.length;
    }

}

export default Cart;