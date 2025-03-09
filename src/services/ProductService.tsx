import Product from "@/domain/Product"
import fetchWithAuth from "@/utils/Auth"

export function productService(url: string) {

    async function getFeaturedProducts() {

        try {
    
            const response = await fetchWithAuth(`${url}/page/1?order=MOST_RECENT`)
            const json = await response.json()
            const products: Product[] = json.data.content.slice(0, 5)
            
            return products
        }catch(e) {
            return []
        }
    
    }

    return {
        getFeaturedProducts
    }
    
}