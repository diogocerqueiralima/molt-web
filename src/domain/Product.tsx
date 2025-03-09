class Product {

    id: number
    name: string
    categories: Category[]

    constructor(id: number, name: string, categories: Category[]) {
        this.id = id
        this.name = name
        this.categories = categories
    }

}

export default Product;