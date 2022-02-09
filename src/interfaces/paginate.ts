export interface PaginateResponse<T> {
    page: number,
    pageSize: number,
    total: number,
    total_pages: number,
    data: T[]
}

export interface PaginateQuery {
    page: number,
    pageSize: number
}

