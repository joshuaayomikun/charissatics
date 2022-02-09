import { Box } from "@mui/material"
import Product from "./product"
import { useContext, useRef } from 'react';
import { Product as ProductModel } from "../interfaces/products";
import { ServiceContext } from "../providers/service-provider";

const HomePage = () => {
    const {productList, openProduct} = useContext(ServiceContext)
    const img = useRef<HTMLImageElement>(null)
   return ( <Box sx={{
        justifyContent: "center",
        display: "flex",
        gridGap: "1px",
        position: 'relative',
        height: {
          md:"500px",lg:"700px"
        }
    }}>
      {
        productList?.map((product: ProductModel, i: number) =>
          <Product i={i} isOpen={product.isOpen?true:false} openProduct={openProduct} image={product.image} key={i} productDescription={product.productDescription} productName={product.productName} productNumber={product.productNumber} />
        )
      }
    </Box>)
}

export default HomePage