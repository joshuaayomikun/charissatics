import {drop} from 'lodash'
import {PaginateQuery, PaginateResponse} from '../interfaces/paginate';

type PaginateFunc = <T>(items: T[], paginateQuery:PaginateQuery) => (PaginateResponse<T>)

const Paginate:PaginateFunc = <T>(items: T[], paginateQuery:PaginateQuery): PaginateResponse<T> => {
    var pg = paginateQuery.page || 1,
        pgSize = paginateQuery.pageSize || 100,
        offset = (pg - 1) * pgSize,
        pagedItems = drop(items, offset).slice(0, pgSize) as T[]
    return {
        page: pg,
        pageSize: pgSize,
        total: items.length,
        total_pages: Math.ceil(items.length / pgSize),
        data: pagedItems
    };

}

export default Paginate