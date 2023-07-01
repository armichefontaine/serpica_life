import { useState, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { green, grey, indigo, orange } from '@mui/material/colors'
import {
    Card,
    CardMedia,
    Typography,
    Box,
    Button,
    CardContent,
    Divider,
    CardActions,
    Grid,
    useMediaQuery,
} from '@mui/material'

import './ProductCard.css'
import ProductQuantity from '../ProductQuantity/ProductQuantity'
import { CartContext } from '../../contexts/ShoppingCartContext'

import { useTheme } from '@mui/material/styles'

import IMAGE_BROKEN from '../../assets/image-broken.jpg'

function ProductCard({ props }) {
    const { name, image, description, accesories, urlMoreInfo, price } = props
    const theme = useTheme()
    const { removeFromCart } = useContext(CartContext)
    const matches = useMediaQuery(theme.breakpoints.down('sm'))
    const { addToCart } = useContext(CartContext)
    const [quantity, setQuantity] = useState(1)
    const [addedToCart, setAddedToCart] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [sumPrice, setSumPrice] = useState(price)

    function quantityUpdate(newQuantity) {
        setQuantity(newQuantity)
        setSumPrice(newQuantity * price)
    }

    function handleBuyClick() {
        const item = {
            title,
            image,
            description,
            accesories,
            price,
            quantity,
            totalPrice: quantity * price,
        }
        addToCart(item)
        setAddedToCart(true)
        setTimeout(() => {
            setAddedToCart(false)
        }, 3000)
        setIsOpen(true)
    }

    function handleClose() {
        setIsOpen(false)
    }

    useEffect(() => {
        console.log(matches)
    }, [matches])

    return (
        <Card sx={{ flexGrow: 1 }}>
            <Grid container sx={{ minHeight: '100%' }}>
                <Grid item xs>
                    <CardContent
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            paddingBottom: 0,
                            minHeight: '100%',
                        }}
                    >
                        <Box sx={{ display: 'flex', width: '100%' }}>
                            <CardMedia
                                component="img"
                                sx={{
                                    marginTop: '-10px',
                                    marginLeft: '-10px',
                                    width: 150,
                                    height: 100,
                                    alignItems: 'center',
                                }}
                                image={IMAGE_BROKEN}
                                alt="Imagen producto"
                            />
                            <Typography
                                fontWeight="bold"
                                fontSize="25px"
                                component="h2"
                                marginLeft={2}
                            >
                                {name}
                            </Typography>
                        </Box>
                        <Divider />
                        <Box paddingTop={1} width={'100%'} marginTop={'auto'}>
                            <Typography fontSize="12px">
                                {description}
                            </Typography>
                            <Typography paddingTop={2} fontSize={10}>
                                Incluye:
                            </Typography>
                            <Box display={'flex'}>
                                <Typography fontSize={12} fontWeight={600}>
                                    {accesories}
                                </Typography>
                                <Link
                                    to={urlMoreInfo}
                                    style={{
                                        marginLeft: 'auto',
                                    }}
                                >
                                    <Typography color={orange[400]}>
                                        Más información
                                    </Typography>
                                </Link>
                            </Box>
                        </Box>
                        {matches && <Divider />}
                    </CardContent>
                </Grid>
                <Grid item xs={12} md={3} sm={3}>
                    <Box
                        sx={{
                            flex: '',
                            margin: 'auto',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: '35px',
                                textAlign: 'center',
                                color: 'black',
                                paddingY: 2,
                            }}
                        >
                            {sumPrice} €
                        </Typography>
                        <ProductQuantity
                            valor={quantity}
                            actualizarValor={quantityUpdate}
                        />
                        <CardActions
                            disableSpacing
                            sx={{
                                display: 'grid',
                                padding: 0,
                                width: '100%',
                            }}
                        >
                            <Button
                                fullWidth
                                sx={{
                                    color: '#fff',
                                    fontWeight: 500,
                                    borderRadius: 0,
                                    height: '100%',
                                    backgroundColor: grey[900],
                                    transitionDuration: '0.6s',
                                    marginBottom: 1,

                                    '&:hover': {
                                        filter: grey[900],
                                        background: grey[700],
                                    },
                                }}
                                onClick={handleBuyClick}
                            >
                                AÑADIR
                            </Button>
                            <Button
                                fullWidth
                                sx={{
                                    color: '#fff',
                                    fontWeight: 500,
                                    borderRadius: 0,
                                    height: '100%',
                                    backgroundColor: green[400],
                                    transitionDuration: '0.6s',
                                    paddingY: '12px',
                                    '&:hover': {
                                        color: '#fff',
                                        background: green[300],
                                    },
                                }}
                                onClick={handleBuyClick}
                            >
                                PAGAR
                            </Button>
                            {addedToCart && (
                                <Typography
                                    sx={{
                                        fontSize: '10px',
                                        paddingTop: '10px',
                                        textAlign: 'center',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    ¡Añadido a la cesta!
                                </Typography>
                            )}
                        </CardActions>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    )
}

export default ProductCard
