import React from 'react'
import { Box, Typography } from '@mui/material'

import './Footer.css'

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                height: '100px',
                width: '100%',
                bottom: 0,
                position: 'fixed',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    height: '50px',
                }}
            >
                <Typography className="footer-text">
                    Política de privacidad
                </Typography>
                <Typography className="footer-text">Aviso legal</Typography>
                <Typography className="footer-text">
                    Política de cookies
                </Typography>
                <Typography className="footer-text">
                    Copyright © 2023
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
