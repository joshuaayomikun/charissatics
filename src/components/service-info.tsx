import { Box, Chip, Typography } from "@mui/material"
import { useRouter } from "next/router";
import React, { useContext, useEffect, useRef, useState } from "react"
import { ServiceContext } from "../providers/service-provider"
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import AppContainer from "./app-container";
import MouseRoundedIcon from '@mui/icons-material/MouseRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import Nav from "./nav";
import { motion } from "framer-motion";
import { localStorageKeys } from "../constants/storage";
import { ClientPosition } from "../interfaces/storage";

const getBoundingClientRect = () => {
    const clientstr = window.localStorage.getItem(localStorageKeys.imgClientPostion)
    let returnVal: ClientPosition = {}
    if (clientstr) {
        returnVal = JSON.parse(clientstr)
    }
    return returnVal
}

const ServiceInfo = () => {
    const { productList, selectedProductIndex, openProduct } = useContext(ServiceContext);
    const [client, setClient] = useState<ClientPosition>()
    const img = useRef<HTMLDivElement>(null)
    // debugger
    const router = useRouter()
    const { productNumber } = router.query
    useEffect(() => {
        // debugger;
        if (window) {
            setClient(getBoundingClientRect())
            // debugger
            if (productNumber) {
                openProduct(productNumber as string)
            }
        }

    }, [productNumber])

    return (
        <>
            <Nav isFixed isTransparent textColor="white" primaryButtonColor="#96abc7" />
            {selectedProductIndex > -1 && (
                <Box sx={{
                    display: "flex",
                    width: "100%",
                    height: "100vh",
                    justifyContent: "space-between",
                    flexGrow: 1
                }}
                >
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            backgroundColor: "#96abc7"
                        }}
                        component={motion.div}
                        initial="hide"
                        animate="show"
                        variants={{
                            show: {
                                width: screen.width - 290,
                                transition: { delay: 0.7, duration: 0.4 }
                            },
                            hide: {
                                width: 0
                            }
                        }}>

                        <AppContainer>
                            <Box sx={{
                                display: "flex",
                                width: "100%",
                                height: "100vh",
                                justifyContent: "space-between",
                                flexGrow: 1,
                                paddingY: "30px",
                                paddingTop: "70px"
                            }}>
                                <Box sx={{
                                    display: "flex",
                                    flexDirection: 'column',
                                    height: "100%",
                                    width: "100%",
                                    gridGap: "20px"
                                }}>
                                    <Box
                                        component={motion.a}
                                        href="/"
                                        sx={{

                                            textDecoration: "none"
                                        }}
                                        onClick={(ev: React.MouseEvent<HTMLAnchorElement>) => {
                                            ev.preventDefault()
                                            router.push("/")
                                        }}>
                                        <ClearRoundedIcon
                                            sx={{
                                                fontSize: "40px",
                                                padding: "10px",
                                                backgroundColor: "white",
                                                color: "#96abc7",
                                                borderRadius: "50px"
                                            }} />
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        gridGap: "40px",
                                        height: "100%",
                                        justifyContent: "space-between"
                                    }}>
                                        <Box sx={{
                                        }}>
                                            <Typography sx={{
                                                fontSize: "50px",
                                                color: "white"
                                            }}>{productList[selectedProductIndex].productNumber}</Typography>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between"
                                        }}>
                                            <Typography sx={{
                                                fontSize: "100px",
                                                fontWeight: "bolder",
                                                color: "white"

                                            }}
                                            component={motion.h2}
                                                animate="show"
                                                initial="hide"
                                                variants={{
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { duration: 0.5, delay: 1.0 }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 50,
                                                    }
                                                }}
                                            >Charissatics<br />{productList[selectedProductIndex].productName}</Typography>
                                            <Typography sx={{
                                                fontSize: "50px",
                                                color: "white"
                                            }} 
                                            
                                            
                                            component={motion.p}
                                                animate="show"
                                                initial="hide"
                                                variants={{
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { duration: 0.5, delay: 1.0 }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 50,
                                                    }
                                                }}
                                            >{productList[selectedProductIndex].productDescription}</Typography>
                                        </Box>
                                        <Box sx={{
                                            display: "flex",
                                            alignItems: "end",
                                            gridGap: "20px",
                                            position:"relative",
                                            marginTop: "auto"
                                        }}>
                                            <MouseRoundedIcon sx={{
                                                backgroundColor: "rgb(0 0 0 / 8%)",
                                                color: "white",
                                                fontSize: "60px",
                                                padding: "15px",
                                                borderRadius: "50px"
                                            }} 
                                            
                                            component={motion.svg}
                                                animate="show"
                                                initial="hide"
                                                variants={{
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { duration: 0.5, delay: 1.0 }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 50,
                                                    }
                                                }}
                                            />
                                            <ArrowForwardRoundedIcon sx={{
                                                backgroundColor: "rgb(0 0 0 / 8%)",
                                                color: "white",
                                                fontSize: "60px",
                                                padding: "15px",
                                                borderRadius: "50px"
                                            }}
                                            
                                            
                                            component={motion.svg}
                                                animate="show"
                                                initial="hide"
                                                variants={{
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { duration: 0.5, delay: 1.0 }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 50,
                                                    }
                                                }}
                                            />
                                            <Chip label="discover" sx={{
                                                backgroundColor: "rgb(0 0 0 / 8%)",
                                                color: "white",
                                                textTransform: "uppercase",
                                                fontSize: "30px",
                                                height: "40px",
                                                paddingX: "30px",
                                                paddingY: "30px",
                                                borderRadius: "55px"
                                            }} 
                                            
                                            component={motion.div}
                                                animate="show"
                                                initial="hide"
                                                variants={{
                                                    show: {
                                                        opacity: 1,
                                                        y: 0,
                                                        transition: { duration: 0.5, delay: 1.0 }
                                                    },
                                                    hide: {
                                                        opacity: 0,
                                                        y: 50,
                                                    }
                                                }}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>

                        </AppContainer>
                    </Box>
                    
                    <Box ref={img} sx={{
                        backgroundImage: `url(..${productList[selectedProductIndex].image})`,
                        backgroundSize: "cover"
                    }} component={motion.div}
                        initial="begin"
                        animate="load"
                        variants={{
                            load: {
                                position: "absolute",
                                height: "100vh",
                                y: window.screenY,
                                x: window.screen.availWidth - (window.screenY + 250 + 46),
                                transition: {
                                    delay: 0.4, duration: 0.4
                                },
                                left: 0,
                                width: ["400px", "350px", "300px", "250px"]
                            },
                            begin: {
                                x: client?.x ? client.x : 535.5,
                                y: client?.y ? client.y : 300,
                                height: client?.height ? `${client.height}px` : "600px",
                                position: 'absolute',
                                width: "400px"
                            }
                        }} />
                </Box>)
            }
        </>
    )
}

export default ServiceInfo