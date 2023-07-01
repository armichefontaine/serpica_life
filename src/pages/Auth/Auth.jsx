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
                <Box
                    component="img"
                    alt="Fondos de pantalla"
                    loading="lazy"
                    src={isLogin ? LOGIN_BACKGROUND : REGISTER_BACKGROUND}
                />
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
