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
        <Box
            sx={{ overflow: 'hidden', minHeight: '100vh', background: '#fff' }}
        >
            <header>
                <Box
                    component="img"
                    alt="Fondos de pantalla"
                    loading="lazy"
                    src={isLogin ? LOGIN_BACKGROUND : REGISTER_BACKGROUND}
                />
            </header>
            <Box
                component={'main'}
                className={!isLogin && 'auth-main'}
                paddingX={'16px'}
                display={'flex'}
                height={'100vh'}
            >
                {isLogin ? (
                    <LoginCard changeToSignup={toggleLoginSignup} />
                ) : (
                    <SingupCard changeToLogin={toggleLoginSignup} />
                )}
            </Box>
            <footer className="auth-footer">
                <Box
                    component="img"
                    src={FOOTER_BACKGROUND}
                    width={'90%'}
                    height={'100%'}
                ></Box>
            </footer>
        </Box>
    )
}

export default Auth
