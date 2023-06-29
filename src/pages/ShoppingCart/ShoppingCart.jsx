import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/ShoppingCartContext'
import ProductShoppingCartCard from '../../components/ProductShoppingCartCard/ProductShoppingCartCard'
import { Typography, Box, Button } from '@mui/material'
import './ShoppingCart.css'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'

function ShoppingCart() {
    const { cart, totalPriceCart, removeFromCart } = useContext(CartContext)

    function getTotalPriceCart(cart) {
        let total = 0
        for (const product of cart) {
            total += product.price * product.quantity
        }
        return total
    }
    function shoppingCartProductDisplay() {
        if (cart.length === 0) {
            return (
                <Box className="empty-cart-card">
                    <ProductionQuantityLimitsIcon
                        style={{ color: 'darkgrey' }}
                    />
                    <Typography className="empty-cart">
                        Tu cesta está vacía
                    </Typography>
                </Box>
            )
        } else {
            const productCart = cart.map((product) => {
                return (
                    <Box sx={{ display: 'flex', position: 'relative' }}>
                        <ProductShoppingCartCard
                            key={product.id}
                            title={product.title}
                            image={product.image}
                            description={product.description}
                            accesories={product.accesories}
                            urlMoreInfo={product.urlMoreInfo}
                            price={product.price}
                            quantity={product.quantity}
                            totalPrice={product.price * product.quantity}
                        ></ProductShoppingCartCard>
                        <Box className="remove-but">
                            <IconButton
                                sx={{
                                    marginBottom: '20px',
                                }}
                                onClick={() => removeFromCart(product)}
                                color="error"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Box>
                    </Box>
                )
            })
            return productCart
        }
    }

    return (
        <Box className="container-cart">
            <Box
                sx={{
                    display: 'Flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '30px',
                        margin: '30px',
                        fontWeight: 'bold',
                    }}
                >
                    Cesta de la compra
                </Typography>
                <Box sx={{ display: 'Flex' }}>
                    <Box>
                        <Box sx={{ minWidth: '800px' }}>
                            {shoppingCartProductDisplay()}
                        </Box>
                    </Box>
                    <Box
                        className="price-box"
                        sx={{
                            display: 'Flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginLeft: '20px',
                        }}
                    >
                        <Typography
                            sx={{
                                fontWeight: 'bold',
                                marginBottom: '20px',
                                fontSize: '25px',
                            }}
                        >
                            Resumen
                        </Typography>
                        <Box sx={{ display: 'Flex' }}>
                            <Typography
                                sx={{
                                    marginBottom: '10px',
                                    width: '120px',
                                    textAlign: 'left',
                                }}
                            >
                                Subtotal
                            </Typography>
                            <Typography
                                sx={{
                                    marginBottom: '10px',
                                    marginLeft: '100px',
                                    width: '100px',
                                    textAlign: 'right',
                                }}
                            >
                                {getTotalPriceCart(cart)} €
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'Flex' }}>
                            <Typography
                                sx={{ marginBottom: '10px', width: '120px' }}
                            >
                                Impuestos (7%)
                            </Typography>
                            <Typography
                                sx={{
                                    marginBottom: '10px',
                                    marginLeft: '100px',
                                    width: '100px',
                                    textAlign: 'right',
                                }}
                            >
                                {(getTotalPriceCart(cart) * 0.07).toFixed(2)} €
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'Flex' }}>
                            <Typography
                                sx={{
                                    marginBottom: '20px',
                                    width: '120px',
                                    fontWeight: 'bold',
                                }}
                            >
                                Total
                            </Typography>
                            <Typography
                                sx={{
                                    marginBottom: '20px',
                                    marginLeft: '100px',
                                    width: '100px',
                                    textAlign: 'right',
                                    fontWeight: 'bold',
                                }}
                            >
                                {getTotalPriceCart(cart) +
                                    getTotalPriceCart(cart) * 0.07}{' '}
                                €
                            </Typography>
                        </Box>

                        <Button
                            sx={{
                                marginTop: '20px',
                                backgroundColor: 'green',
                                '&:hover': {
                                    backgroundColor: '#005000',
                                },
                            }}
                            variant="contained"
                        >
                            Pagar
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default ShoppingCart
