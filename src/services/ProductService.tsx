import { CategoryServiceContextType } from "@/context/CategoryServiceContext"
import Product from "@/domain/Product"
import ApiResponseDto from "@/dto/ApiResponseDto"
import PageDto from "@/dto/PageDto"
import ProductDto from "@/dto/ProductDto"
import fetchWithAuth from "@/utils/Auth"

export function productService(url: string, categoryService: CategoryServiceContextType) {

    async function getFeaturedProducts(): Promise<Product[]> {

        try {
    
            const response = await fetchWithAuth(`${url}/page/1?order=MOST_RECENT`)
            const apiResponse: ApiResponseDto<PageDto<ProductDto>> = await response.json()
            const productsDto = apiResponse.data?.content ?? []
            
            return await Promise.all(
                productsDto.map(async dto => {
                    
                  const categories = await Promise.all(dto.categories.map(categoryId => categoryService.getCategoryById(categoryId)));
                  
                  return new Product(dto.id, dto.name, categories.filter(category => category !== undefined));
                })
              )
              
        }catch(e) {
            return []
        }
    
    }

    return {
        getFeaturedProducts
    }
    
}