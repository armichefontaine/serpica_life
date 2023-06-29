import { useState } from 'react'
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material'

import './ProductShoppingCartCard.css'

function ProductShoppingCartCard({
    title,
    image,
    description,
    accesories,
    urlMoreInfo,
    price,
    quantity,
    totalPrice,
}) {
    return (
        <Card className="cardProduct">
            <Box className="imageContainer">
                <CardMedia className="cardImage" image={image}></CardMedia>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '250',
                    margin: '20px',
                }}
            >
                <CardHeader sx={{ padding: '0px' }} title={title}></CardHeader>
                <Typography sx={{ fontSize: '13px', width: '400px' }}>
                    {description}
                </Typography>

                <Typography
                    sx={{
                        fontWeight: 'bold',
                        marginTop: '4px',
                        fontSize: '15px',
                    }}
                >
                    Incluye
                </Typography>

                <Typography
                    sx={{
                        fontSize: '12px',
                        textDecoration: 'underline',
                        textShadow: '1px 1px 2px #ddd',
                    }}
                >
                    {accesories}
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        marginTop: '10px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '15px',
                            textAlign: 'center',
                            color: 'black',
                            marginRight: '30px',
                        }}
                    >
                        {quantity} ud.
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '15px',
                            textAlign: 'center',
                            color: 'black',
                            marginRight: '30px',
                        }}
                    >
                        x
                    </Typography>

                    <Typography
                        sx={{
                            fontSize: '15px',
                            textAlign: 'center',
                            color: 'black',
                        }}
                    >
                        {price} €
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        marginTop: '10px',
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: '19px',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            color: 'black',
                        }}
                    >
                        Total
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '19px',
                            fontWeight: 'bold',
                            textAlign: 'left',
                            color: 'black',
                            marginLeft: '10px',
                        }}
                    >
                        {totalPrice} €
                    </Typography>
                </Box>
            </Box>
        </Card>
    )
}

export default ProductShoppingCartCard
