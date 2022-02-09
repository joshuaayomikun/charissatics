import { Container, styled, Typography } from "@mui/material";
import { FC } from "react";
import AppContainer from "./app-container";

const HeroTypography = styled(Typography)({
    fontSize: '200px',
    textAlign:'center',
    fontWeight:'bolder',
    textTransform:'uppercase',
    color: '#96abc7'
})

const Hero:FC = () => {
    return <AppContainer>
        <HeroTypography>
            our services
        </HeroTypography>
    </AppContainer>
}

export default Hero