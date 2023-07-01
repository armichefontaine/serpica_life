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

import DEFAULT_AVATAR from '../assets/avatar.jpg'

function MainLayout() {
    const [open, setOpen] = useState(false)
    const matches = useMediaQuery('(min-width: 768px)')
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
                        sx={{
                            display: 'flex',
                            gap: 2,
                            fontWeight: 600,
                            marginLeft: 'auto',
                            fontSize: '0.86rem',
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
                            alt="Avatar de  ususario"
                            src={DEFAULT_AVATAR}
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
