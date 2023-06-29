import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material'

import { getCategories } from '../../services/lifeAPI'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

import './Home.css'

function Home() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function refreshCategories() {
            const categoriesResponse = await getCategories()
            setCategories(categoriesResponse.data)
        }
        refreshCategories()
    }, [])

    function getCardCategories() {
        const cards = categories.map((category) => {
            const { id, name, urlImage } = category

            return (
                <Link
                    key={category.id}
                    className="noUnderline"
                    to={`/category/${id}`}
                >
                    <CategoryCard
                        className="category-card-container"
                        key={id}
                        title={name}
                        image={urlImage}
                    />
                </Link>
            )
        })
        return cards
    }

    return (
        <Box className="home-container">
            <Box>
                <Typography
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '30px',
                        marginBottom: '30px',
                    }}
                >
                    ¿Qué tipo de producto buscas?+
                </Typography>
            </Box>
            <Box className="product-container" sx={{ display: 'flex' }}>
                {getCardCategories()}
            </Box>
        </Box>
    )
}

export default Home
