import { NextPage } from "next"
import { createContext, useEffect, useState } from "react"
import { Products } from "../constants/products"
import { ComponentWithChildren } from "../interfaces/component-with-children"
import { PaginateQuery } from "../interfaces/paginate"
import { Product as ProductModel } from "../interfaces/products"
import Paginate from "../util/paginate"


interface ServiceContextModel {
    productList: ProductModel[],
    selectedProductIndex:number,
    openProduct: (productNumber: string) => void
}

export const ServiceContext = createContext<ServiceContextModel>({
    productList: Paginate<ProductModel>(Products, {
        page: 1,
        pageSize: 6
    }).data,
    selectedProductIndex:-1,
    openProduct: (productNumber) => { }
})

interface ServiceProviderProps extends ComponentWithChildren {

}

const ServiceProvider: NextPage<ServiceProviderProps> = (props: ServiceProviderProps) => {

    const [productList, setProductList] = useState<ProductModel[]>([])
    const [selectedProductIndex, setSelectedProductIndex] = useState(-1)
    const [paginateQuery, setPaginateQuery] = useState<PaginateQuery>({
        page: 1,
        pageSize: 6
    })
    const [openedProduct, setOpenedProduct] = useState<string>("")

    const openProduct = (productNumber: string) => {
        setOpenedProduct(productNumber);
    }

    useEffect(() => {
        const paginatedData = Paginate<ProductModel>(Products, paginateQuery)
        setProductList(paginatedData.data)
    }, [paginateQuery])

    useEffect(() => {
        const index = productList.findIndex((x) => x.isOpen)
        setSelectedProductIndex(index)
    }, [productList])

    useEffect(() => {
        setProductList((prev) => {
            // debugger
            const newVal = prev ? [...prev] : []
            const currentIndex = newVal.findIndex((x, i) => openedProduct === x.productNumber)
            const currentTrueIndex = newVal.findIndex((x, i) => x.isOpen)
            if (currentTrueIndex > -1) {
                newVal[currentTrueIndex] = { ...newVal[currentTrueIndex], isOpen: false }
            }
            if (currentIndex > -1) {
                // debugger
                newVal[currentIndex] = { ...newVal[currentIndex], isOpen: true }
            }
            return newVal
        })
    }, [openedProduct])

    return (<ServiceContext.Provider value={{
        openProduct, productList, selectedProductIndex
    }}>
        {props.children}
    </ServiceContext.Provider>)
}

export default ServiceProvider