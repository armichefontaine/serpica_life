import * as React from 'react'
import PropTypes from 'prop-types'
import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { grey } from '@mui/material/colors'
import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import Typography from '@mui/material/Typography'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import { Divider } from '@mui/material'
import './MenuDrawer.css'
import { Link } from 'react-router-dom'

const drawerBleeding = 56

const Root = styled('div')(({ theme }) => ({
    height: '100%',
}))

const Puller = styled(Box)(({ theme }) => ({
    width: 30,
    height: 6,
    borderRadius: 3,
    position: 'absolute',
    bottom: 8,
    left: 'calc(50% - 15px)',
}))

function MenuDrawer(props) {
    const { window, open, setOpen } = props

    const StyledBox = styled(Box)(({ theme }) => ({
        backgroundColor: open ? '#fff' : 'transparent',
    }))

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen)
    }

    // This is used only for the example
    const container =
        window !== undefined ? () => window().document.body : undefined

    return (
        <Root>
            <CssBaseline />
            <Global
                styles={{
                    '.MuiDrawer-root > .MuiPaper-root': {
                        height: `calc(20.9% - ${drawerBleeding}px)`,
                        width: '50%',
                        overflow: 'visible',
                        borderBottomLeftRadius: 5,
                    },
                }}
            />
            <SwipeableDrawer
                container={container}
                anchor="right"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={true}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <StyledBox
                    className="menu-wrapper"
                    sx={{
                        position: 'relative',
                        borderBottomLeftRadius: 5,
                        visibility: 'visible',
                        bottom: 0,
                    }}
                >
                    <Puller />
                    <Typography>Pedidos</Typography>
                    <Divider />
                    <Typography>Perfil</Typography>
                    <Divider />
                    <Link to="/">
                        <Typography
                            sx={{
                                borderBottomLeftRadius: 5,
                            }}
                        >
                            Salir
                        </Typography>
                    </Link>
                </StyledBox>
            </SwipeableDrawer>
        </Root>
    )
}

MenuDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
}

export default MenuDrawer
