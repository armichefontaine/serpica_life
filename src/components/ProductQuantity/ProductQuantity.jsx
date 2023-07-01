import React, { useState } from 'react'
import './ProductQuantity.css'
import { Box, Button, Typography } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function ProductQuantity({ valor = 1, actualizarValor, vertical = false }) {
    const [quantity, setQuantity] = useState(valor)

    function increase() {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        actualizarValor(newQuantity)
    }

    function decrease() {
        const newQuantity = quantity - 1
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
            actualizarValor(newQuantity)
        }
    }

    return (
        <Box
            display={'grid'}
            gridTemplateColumns={'repeat(3, 1fr)'}
            marginBottom={5}
            width={'100%'}
            sx={{ background: '#eeeeee' }}
        >
            <Box height={'100%'} width={'100%'} display={'flex'}>
                <Button sx={{ borderRadius: 0, margin: 'auto' }}>
                    <RemoveIcon
                        fontSize={'small'}
                        sx={{ margin: 'auto', color: '#000' }}
                        onClick={decrease}
                    />
                </Button>
            </Box>
            <Typography
                fontWeight={500}
                height={'100%'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
                // border={'1px solid rgb(0,0,0,0.2)'}
                style={{ background: '#fff' }}
            >
                {quantity}
            </Typography>
            <Box height={'100%'} width={'100%'} display={'flex'}>
                <Button sx={{ borderRadius: 0, margin: 'auto' }}>
                    <AddIcon
                        fontSize={'small'}
                        sx={{ margin: 'auto', color: '#000' }}
                        onClick={increase}
                    />
                </Button>
            </Box>
        </Box>
    )
}

export default ProductQuantity
