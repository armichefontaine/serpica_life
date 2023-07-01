import authApi from './authAPIConfig'

export async function login(payload) {
    const response = await authApi.post('/auth/login', payload)
    return response
}

export async function signup(payload) {
    const response = await authApi.post('/auth/signup', payload)
    console.log(response)
    return response
}
