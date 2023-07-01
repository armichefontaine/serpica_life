import React from 'react'
import { Box, Typography } from '@mui/material'

import './Footer.css'

function Footer() {
    return (
        <Box className="main-footer">
            <Box sx={{ display: 'flex ' }}>
                <Typography
                    sx={{
                        margin: 'auto',
                        color: '#ff9800',
                        fontSize: '0.9rem',
                        fontWeight: 700,
                    }}
                >
                    SERPICA
                </Typography>
            </Box>
            <Box>
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
