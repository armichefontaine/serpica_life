import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { styled } from '@mui/material/styles'
import { Box, Grid, Typography, Paper } from '@mui/material'

import { getCategories } from '../../services/lifeAPI'
import CategoryCard from '../../components/CategoryCard/CategoryCard'

import './Home.css'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

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
            <Grid container>
                {categories.map((category) => {
                    const { id, name, urlImage } = category
                    return (
                        <Grid item col={12} md={6}>
                            <Item>
                                <Link
                                    key={category.id}
                                    className=""
                                    to={`/category/${id}`}
                                >
                                    <CategoryCard
                                        className="categoryCardContainer"
                                        key={id}
                                        title={name}
                                        image={urlImage}
                                    />
                                </Link>
                            </Item>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Home
