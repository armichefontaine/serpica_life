import { useState } from 'react'
import { Box } from '@mui/material'
import LoginCard from '../../components/LoginCard/LoginCard'
import SingupCard from '../../components/SignupCard/SingupCard'

import './Auth.css'
import LazyBackgroundImage from '../../components/LazyBackGroundImage/LazyBackGroundImage'

import LOGIN_BACKGROUND from '../../assets/backgrounds/loginbackground-min.jpg'

function Auth() {
    const [isLogin, setIsLogin] = useState(true)

    function toggleLoginSignup() {
        setIsLogin((oldState) => !oldState)
    }

    return (
        <LazyBackgroundImage img={LOGIN_BACKGROUND} className="box">
            {isLogin ? (
                <LoginCard changeToSignup={toggleLoginSignup} />
            ) : (
                <SingupCard changeToLogin={toggleLoginSignup} />
            )}
        </LazyBackgroundImage>
    )
}

export default Auth
