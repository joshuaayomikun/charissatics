import { AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, styled, Theme, Tooltip, Typography } from "@mui/material"
import Toolbar from '@mui/material/Toolbar';

import { FC, MouseEvent, useState } from "react"
import MenuIcon from '@mui/icons-material/Menu';
import pages from "../../pages"
import AppContainer from "./app-container";
// A style sheet
const MyToollbar = styled(Toolbar)({
    width: "100%",
    justifyContent: "space-between",
});

interface NavProps {
    isFixed?: boolean,
    isTransparent?: boolean,
    textColor?: string,
    menuBackground?: string,
    primaryButtonColor?:string,
    primaryButtonTextColor?:string,
    isAnimate?:boolean
}

const Nav: FC<NavProps> = ({ isFixed = false, isTransparent = false, menuBackground = 'white', textColor = "black", primaryButtonTextColor="black", primaryButtonColor="white", ...props }: NavProps) => {
    // debugger
    const pages = ['Facebook', 'LinkedIn', 'Youtube'];
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position={isFixed ? "fixed" : "static"} sx={{ backgroundColor: isTransparent ? 'transparent' : menuBackground, boxShadow: 'none', color: textColor }}>
            <AppContainer>
                <MyToollbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, fontSize:"30px", display: { xs: 'none', md: 'flex' } }}
                    >
                        Charissatics
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" sx={{
                                        color: textColor
                                    }}>{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{
                        width: { md: '50%' },
                        display: 'flex',
                        justifyContent: 'space-between'

                    }}>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2, display: 'block',
                                        color: textColor,
                                        fontSize: "20px"
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 0, my: 2 }}>
                            <Button sx={{ textTransform: "capitalize", borderRadius: "50px", fontSize:"20px", color:primaryButtonTextColor , backgroundColor:primaryButtonColor }} variant="contained" >
                                book now
                            </Button>
                        </Box>
                    </Box>
                </MyToollbar>
            </AppContainer>
        </AppBar>)
}

export default Nav