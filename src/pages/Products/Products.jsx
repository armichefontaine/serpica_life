import { useEffect, useState } from 'react'
import { Box, Typography, Link, Button } from '@mui/material'
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

            console.log(data)
        }
        getCategoriesRequest()
    }, [])

    function getCardProducts() {
        const cards = products.map((product) => {
            return (
                <ProductCard
                    key={product.id}
                    title={product.name}
                    image={product.urlImage}
                    description={product.description}
                    accesories={product.accesories}
                    urlMoreInfo={product.urlMoreInfo}
                    price={product.price}
                />
            )
        })
        return cards
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '30px',
                    marginBottom: '10px',
                    marginTop: '30px',
                }}
            >
                <Typography sx={{ fontSize: '30px', fontWeight: 'bold' }}>
                    {categoryPage.name}
                </Typography>
            </Box>
            <Box sx={{ marginBottom: '15px' }}>
                <BasicBreadcrumbs />
            </Box>
            <Box className="productPageContent">{getCardProducts()}</Box>
        </Box>
    )
}

export default Products
