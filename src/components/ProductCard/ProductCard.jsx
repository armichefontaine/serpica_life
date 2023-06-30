import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
    Card,
    CardHeader,
    CardMedia,
    Typography,
    Box,
    Button,
} from '@mui/material'

import './ProductCard.css'
import ProductQuantity from '../ProductQuantity/ProductQuantity'
import { CartContext } from '../../contexts/ShoppingCartContext'
import PopupButton from '../Popup/Popup'

function ProductCard({
    title,
    image,
    description,
    accesories,
    urlMoreInfo,
    price,
}) {
    const { removeFromCart } = useContext(CartContext)
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

    return (
        <Card className="cardProductStyle">
            <CardMedia className="cardImage" image={image}></CardMedia>
            <Box className="productDescriptionWrapper">
                <CardHeader className="headerCard" title={title}></CardHeader>
                <Typography className="description" sx={{ width: '250px' }}>
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

                <Typography sx={{ fontSize: '12px' }}>{accesories}</Typography>

                <Link className="noUnderline" to={urlMoreInfo}>
                    <Typography
                        sx={{
                            paddingTop: '8px',
                            fontSize: '12px',
                            color: 'orange',
                            fontWeight: 'bold',
                        }}
                    >
                        Más información
                    </Typography>
                </Link>
            </Box>
            <Box
                className="productAmount"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    margin: '20px',
                }}
            >
                <Typography
                    sx={{
                        fontSize: '25px',
                        fontWeight: 'bold',
                        textAlign: 'center',
                        color: 'black',
                    }}
                >
                    {sumPrice} €
                </Typography>
                <ProductQuantity
                    valor={quantity}
                    actualizarValor={quantityUpdate}
                />

                <Button
                    sx={{
                        backgroundColor: 'green',
                        marginTop: '30px',
                        '&:hover': {
                            backgroundColor: '#005000',
                        },
                    }}
                    variant="contained"
                    onClick={handleBuyClick}
                >
                    Comprar
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
            </Box>
        </Card>
    )
}

export default ProductCard
