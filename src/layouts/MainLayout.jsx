import { Outlet } from 'react-router-dom'

import { Link, useNavigate } from 'react-router-dom'
import { AppBar, Button, Toolbar } from '@mui/material'
import { Box } from '@mui/system'
import LogoutIcon from '@mui/icons-material/Logout'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import Footer from '../components/Footer/Footer'
import './MainLayout.css'

function MainLayout() {
    const navigate = useNavigate()

    function onLogout() {
        localStorage.removeItem('token')
        navigate('/')
    }

    return (
        <>
            <AppBar elevation={0} position="sticky">
                <Toolbar
                    className="navContent"
                    variant="dense"
                    sx={{ display: 'Flex', height: '120px' }}
                >
                    <Link to={'/home'}>
                        <Box className="logo-life" />
                    </Link>
                    <Box className="menuContent">
                        <Box>
                            <Link to={'/home'}>
                                <Button
                                    sx={{ color: 'black', fontWeight: 'bold' }}
                                >
                                    Inicio
                                </Button>
                            </Link>
                        </Box>

                        <Box>
                            <Link to={'/home'}>
                                <Button
                                    sx={{ color: 'black', fontWeight: 'bold' }}
                                >
                                    Categorías
                                </Button>
                            </Link>
                        </Box>

                        <Box>
                            <Link to={'https://www.homelife.it/es/download/'}>
                                <Button
                                    sx={{ color: 'black', fontWeight: 'bold' }}
                                >
                                    Manuales
                                </Button>
                            </Link>
                        </Box>

                        {/* <Box>
              <Link to={"/home"}>
                <Button sx={{ color: "black", fontWeight: "bold" }}>
                  Contacto
                </Button>
              </Link>
            </Box> */}
                    </Box>

                    <Box className="buy-profile">
                        <Box>
                            <Link to={'/shopping-cart'} className="buyMenu">
                                <ShoppingCartIcon sx={{ color: 'black' }} />
                                <Button
                                    sx={{ color: 'black', fontWeight: 'bold' }}
                                >
                                    Cesta
                                </Button>
                            </Link>
                        </Box>
                        <Box sx={{ marginLeft: '20px' }}>
                            <Link to={'/home'} className="profileMenu">
                                <LogoutIcon
                                    sx={{
                                        color: 'black',
                                        width: '24px',
                                        height: '24px',
                                    }}
                                />
                                <Button
                                    onClick={() => onLogout()}
                                    sx={{ color: 'black', fontWeight: 'bold' }}
                                >
                                    Desconectar
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Toolbar>
            </AppBar>
            <Outlet />
            <Footer />
        </>
    )
}

export default MainLayout
