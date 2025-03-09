import ApiResponseDto from "@/dto/ApiResponseDto"
import CategoryDto from "@/dto/CategoryDto"
import fetchWithAuth from "@/utils/Auth"

export function categoryService(url: string) {

    async function getCategoryById(id: number): Promise<Category | undefined> {

        try {

            const response = await fetchWithAuth(`${url}/${id}`)
            const apiResponse: ApiResponseDto<CategoryDto> = await response.json()

            return apiResponse.data
        }catch(e) {
            return undefined
        }

    }

    return {
        getCategoryById
    }

}