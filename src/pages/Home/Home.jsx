import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Typography } from '@mui/material'

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

    return (
        <Box>
            <Grid item xs={12}>
                <Typography
                    className="title"
                    component="h2"
                    variant="h2"
                    paragraph
                    sx={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        fontSize: '1.7rem',
                        marginBottom: '30px',
                    }}
                >
                    ¿Qué tipo de producto buscas?
                </Typography>
            </Grid>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container justifyContent={'center'}>
                    {categories.map((category) => {
                        const { id, name, urlImage } = category
                        return (
                            <Grid
                                margin={1}
                                key={category.id}
                                item
                                xs={12}
                                sm={5}
                                md={4}
                                lg={3}
                            >
                                <Link to={`/category/${id}`}>
                                    <CategoryCard
                                        title={name}
                                        image={urlImage}
                                    />
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        </Box>
    )
}

export default Home
