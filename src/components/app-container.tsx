import { Container } from "@mui/material"
import { FC } from "react"
import { ComponentWithChildren } from "../interfaces/component-with-children"


interface AppContainerProps extends ComponentWithChildren {
    height?: string
}

const AppContainer:FC<AppContainerProps> = (props: AppContainerProps) => {
    return <Container maxWidth={false} sx={{
        height: props.height?props.height:'initial'
    }}>
        {props.children}
    </Container>
}

export default AppContainer