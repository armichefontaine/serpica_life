import { useState } from 'react'
import LoginCard from '../../components/LoginCard/LoginCard'
import SingupCard from '../../components/SignupCard/SingupCard'

import './Auth.css'

import LOGIN_BACKGROUND from '../../assets/backgrounds/loginbackground-min.webp'
import REGISTER_BACKGROUND from '../../assets/backgrounds/registerbackground-min.jpg'
import FOOTER_BACKGROUND from '../../assets/backgrounds/footer.webp'
import { Box } from '@mui/material'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)

    function toggleLoginSignup() {
        setIsLogin((oldState) => !oldState)
    }

    return (
        <Box sx={{ overflow: 'hidden' }}>
            <header>
                {isLogin ? (
                    <img src={LOGIN_BACKGROUND} alt="login-register image" />
                ) : (
                    <img
                        className="registerImage"
                        src={REGISTER_BACKGROUND}
                        alt="login-register image"
                    />
                )}
            </header>
            <main className="main">
                {isLogin ? (
                    <LoginCard changeToSignup={toggleLoginSignup} />
                ) : (
                    <SingupCard changeToLogin={toggleLoginSignup} />
                )}
            </main>
            <footer className="auth-footer"></footer>
        </Box>
    )
}

export default Auth
