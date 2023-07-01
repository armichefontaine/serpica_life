import { useEffect, useState } from 'react'
import { Box, Typography, Link, Button, Grid } from '@mui/material'
import { getProducts, getProductsbyCategory } from '../../services/lifeAPI'
import { useParams } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard'
import { getCategories } from '../../services/lifeAPI'
import BasicBreadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'

import './Products.css'

function Products() {
    const [categoryPage, setCategoryPage] = useState('')
    const [products, setProducts] = useState([])
    const { categoryId } = useParams()

    useEffect(() => {
        async function getCategoriesRequest() {
            const categoriesResponse = await getCategories()
            const category = categoriesResponse.data.find(
                (cat) => cat.id == categoryId
            )
            setCategoryPage(category)
            refreshProducts()
        }

        async function refreshProducts() {
            const { data } = await getProductsbyCategory(categoryId)
            setProducts(data)
        }
        getCategoriesRequest()
    }, [])

    return (
        <Box paddingX={'16px'}>
            <Box
                textAlign={'center'}
                fontWeight={'bold'}
                fontSize={'30px'}
                marginBottom={'10px'}
                marginTop={'30px'}
            >
                <Typography fontSize={30} fontWeight={'bold'}>
                    {categoryPage.name}
                </Typography>
            </Box>
            <BasicBreadcrumbs />
            <Grid
                container
                flexDirection={'column'}
                alignContent="center"
                gap={4}
            >
                {products.map((product) => {
                    return (
                        <Grid item key={product.id} xs>
                            <ProductCard props={{ ...product }} />
                        </Grid>
                    )
                })}
            </Grid>
        </Box>
    )
}

export default Products
