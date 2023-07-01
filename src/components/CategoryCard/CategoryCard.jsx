import { useState } from 'react'

import { Card, CardHeader, CardMedia } from '@mui/material'

import './CategoryCard.css'

import prueba from '../../assets/logo.jpg'

function CategoryCard({ title, image }) {
    const [hoverClass, setHoverClass] = useState('')

    return (
        <Card className="cardCategory">
            <CardMedia className="cardImage" image={image ?? prueba} />
            <CardHeader
                className="cardText"
                sx={{ textAlign: 'center', textDecoration: 'none' }}
                title={title}
            />
        </Card>
    )
}

export default CategoryCard
