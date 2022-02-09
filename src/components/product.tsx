import { Box, styled, Typography } from "@mui/material"
import { AnimatePresence, motion } from "framer-motion"
import { url } from "inspector"
import { useRouter } from "next/router"
import React, { FC, RefObject, useContext, useEffect, useRef } from "react"
import { localStorageKeys } from "../constants/storage"
import { Product as ProductModel } from "../interfaces/products"
import { ClientPosition } from "../interfaces/storage"
import { ServiceContext } from "../providers/service-provider"
import AppContainer from "./app-container"

interface ProductProps extends ProductModel {
    openProduct: (productNumber: string) => void,
    i: number
}

const setImagePosition = (img: HTMLImageElement, i = 0) => {
    // debugger
    const rect = img?.getBoundingClientRect()
    const val:ClientPosition = {
        height: rect?.height,
        width: rect?.width,
        x: rect?.x,
        y: rect?.y,
        right: rect.right,
        left: rect?.left,
        top:rect?.top,
        bottom:rect?.bottom
    }

    window.localStorage.setItem(localStorageKeys.imgClientPostion, JSON.stringify(val))
}

const clearImagePosition = () => {
    window.localStorage.removeItem(localStorageKeys.imgClientPostion)
}



const Product: FC<ProductProps> = (props: ProductProps) => {
    const img = useRef<HTMLImageElement[]>([])
    const {selectedProductIndex} = useContext(ServiceContext)
    const router = useRouter()
    useEffect(() => {
            if(selectedProductIndex === props.i) {
            setImagePosition(img.current[selectedProductIndex])
            }
    })

    return <Box onMouseEnter={() => props.openProduct(props.productNumber)} onMouseLeave={() => props.openProduct("")} sx={{
        display: "flex",
        textDecoration: "none"
    }}
        onClick={(ev: React.MouseEvent<HTMLAnchorElement>) => {
            ev.preventDefault()
            router.push(ev.currentTarget.href)
        }}
        component={motion.a}
        href={`/${props.productNumber}`}
        initial="short"
        animate="high"
        marginTop='auto'
        variants={{
            high: {
                transition: { duration: 0.5, delay: props.i * 0.3 },
                height: "100%",
                opacity: 1
            },
            short: {
                opacity: 0,
                height: "30%",
            }
        }}
    >
        <Box component={motion.div}
            key="content"
            initial="collapsed"
            animate={props.isOpen ? "open" : "collapsed"}
            sx={{
                backgroundColor: "#96abc7"
            }}
            variants={{
                open: {
                    width: "250px",
                    transition: { duration: 0.3, delay: 0.2 }
                },
                collapsed: {
                    width: "0px",
                    transition: { duration: 0.3, delay: 0.2 }
                }
            }}
        >
            <Box sx={{
                display: "flex",
                height: '100%',
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
                padding: "10px",
                width: "0px",
            }}
            >
                <Typography component={motion.h1} sx={{
                    fontSize: "80px",
                    color: 'white',
                    fontWeight: "bolder"
                }}
                    animate={props.isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, delay: 0.4 },
                            display: "inline-block"
                        },
                        hide: {
                            opacity: 0,
                            y: 50,
                            transition: { duration: 0.2, delay: 0.1 },
                            overflow: 'hidden'
                        }
                    }}
                >
                    {props.productNumber}
                </Typography>
                <Typography
                    component={motion.p}
                    animate={props.isOpen ? "show" : "hide"}
                    variants={{
                        show: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.5, delay: 0.4 }
                        },
                        hide: {
                            opacity: 0,
                            y: 50,
                            transition: { duration: 0.5, delay: 0.1 }
                        }
                    }}
                    sx={{
                        fontSize: "20px",
                        color: 'white',
                        fontWeight: "bolder",
                    }}>
                    Charissatics<br />
                    {props.productName}
                </Typography>
            </Box>
        </Box>
        <Box sx={{ position: "relative" }}>
            <Box 
                ref={ (ref) => img.current[props.i === selectedProductIndex? selectedProductIndex: props.i] = ref as HTMLImageElement}
                variants={{
                    expand: {
                        width: "400px",
                        transition: { duration: 0.3, delay: 0.2 }
                    },
                    collaspe: {
                        width: "200px",
                        transition: { duration: 0.3, delay: 0.2 }
                    }
                }}
                initial="collaspe"
                animate={props.isOpen ? "expand" : "collaspe"}
                sx={{
                    backgroundImage: `url(${props.image})`,
                    position: 'relative',
                    height: "100%",
                }} component={motion.div}

            />
            <Box
                animate={props.isOpen ? "hide" : "show"}
                initial="show"
                variants={{
                    show: {
                        opacity: 1,
                        transition: { duration: 0.3, delay: 0.2 }
                    },
                    hide: {
                        opacity: 0,
                        transition: { duration: 0.3, delay: 0.2 },
                    }
                }}
                component={motion.div}
                sx={{
                    position: 'absolute',
                    backgroundColor: '#3368ab85',
                    content: '""',
                    left: 0,
                    right: 0,
                    top: 0,
                    bottom: 0,
                }} />
        </Box>
    </Box>
}

export default Product