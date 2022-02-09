import { Container, styled, Typography } from "@mui/material";
import { FC } from "react";
import AppContainer from "./app-container";


const Hero: FC = () => {
    return <AppContainer>
        <Typography sx={{
            fontSize: { md: '150px', lg: '200px'},
            textAlign: 'center',
            fontWeight: 'bolder',
            textTransform: 'uppercase',
            color: '#96abc7'
        }}>
            our services
        </Typography>
    </AppContainer>
}

export default Hero