export default interface PageDto<T> {

    page_size: number
    total_pages: number
    number: number
    content: T[]

}