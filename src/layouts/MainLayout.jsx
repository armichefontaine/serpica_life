import { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Avatar, Button, Stack, Toolbar, Box } from '@mui/material'
import LogoutIcon from '@mui/icons-material/Logout'
import ShopDialog from '../components/ShopDialog/ShopDialog'

import useMediaQuery from '@mui/material/useMediaQuery'
import MenuDrawer from '../components/MenuDrawer/MenuDrawer'

import Footer from '../components/Footer/Footer'
import './MainLayout.css'

function MainLayout() {
    const [open, setOpen] = useState(true)
    const matches = useMediaQuery('(min-width:600px)')
    const navigate = useNavigate()

    function handleMenu() {
        setOpen(!open)
    }

    function onLogout() {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <AppBar elevation={0} position="sticky">
                <Toolbar className="navContent" variant="dense">
                    <Link to={'/home'}>
                        <Box className="logoLife" />
                    </Link>
                    <Box
                        className="menuContent"
                        sx={{
                            display: 'flex',
                            marginLeft: 'auto',
                            gap: 2,
                            fontSize: '0.8rem',
                        }}
                    >
                        <Link to={'/home'}>Inicio</Link>
                        <Link to={'/home'}>Categorías</Link>
                        <Link to={'https://www.homelife.it/es/download/'}>
                            Manuales
                        </Link>
                    </Box>
                    <MenuDrawer open={open} setOpen={setOpen} />
                    <Stack
                        direction="column"
                        margin="0 10px 0 auto"
                        paddingRight={2}
                    >
                        <Avatar
                            onClick={handleMenu}
                            sx={{
                                width: '40px',
                                height: '40px',
                            }}
                            alt=""
                            src="../../assets/avatar.jpg"
                        />
                    </Stack>
                </Toolbar>
            </AppBar>
            <ShopDialog />
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
