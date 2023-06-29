import authApi from './authAPIConfig'

export async function login(data) {
    const response = await authApi.post('/auth/login', data)
    return response
}

export async function signup(data) {
    const response = await authApi.post('/auth/signup', data)
    console.log(response)
    return response
}
