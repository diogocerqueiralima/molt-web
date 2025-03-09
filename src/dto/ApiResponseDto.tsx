export default interface ApiResponseDto<T> {

    message: string
    data: T | undefined

}