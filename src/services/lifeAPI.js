import authApi from './authAPIConfig'

export async function getCategories() {
    const response = await authApi.get('/categories/')
    return response
}

export async function getProducts() {
    const response = await authApi.get('/products/')
    return response
}

export async function getProductsbyCategory(categoryId) {
    const response = await authApi.get(`/products/category/${categoryId}`)
    return response
}
