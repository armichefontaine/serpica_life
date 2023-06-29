import React from 'react'
import { Box, Typography } from '@mui/material'

import './Footer.css'

function Footer() {
    return (
        <Box
            sx={{
                backgroundColor: 'black',
                height: '50px',
                bottom: 0,
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
