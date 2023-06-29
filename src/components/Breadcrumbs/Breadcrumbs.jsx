import * as React from 'react'
import { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import { Link, useParams } from 'react-router-dom'
import { getCategories } from '../../services/lifeAPI'
import './Breadcrumbs.css'

function handleClick(event) {
    event.preventDefault()
}

export default function BasicBreadcrumbs() {
    const [categoryPage, setCategoryPage] = useState('')
    const { categoryId } = useParams()

    useEffect(() => {
        async function getCategoriesRequest() {
            const categoriesResponse = await getCategories()
            const category = categoriesResponse.data.find(
                (cat) => cat.id == categoryId
            )
            setCategoryPage(category)
        }

        getCategoriesRequest()
    }, [])

    return (
        <div role="presentation" onClick={handleClick}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                    <Link style={{ textDecoration: 'none' }} to={'/home'}>
                        Categoría
                    </Link>
                    <Typography className="breadC" color="text.primary">
                        {categoryPage.name}
                    </Typography>
                </Breadcrumbs>
            </Box>
        </div>
    )
}
