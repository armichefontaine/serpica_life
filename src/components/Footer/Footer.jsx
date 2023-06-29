import React from 'react'
import { Box, Typography } from '@mui/material'

import './Footer.css'

function Footer() {
    return (
        <Box className="main-footer">
            <Typography className="footer-text">
                Política de privacidad
            </Typography>
            <Typography className="footer-text">Aviso legal</Typography>
            <Typography className="footer-text">Política de cookies</Typography>
            <Typography className="footer-text">Copyright © 2023</Typography>
        </Box>
    )
}

export default Footer
