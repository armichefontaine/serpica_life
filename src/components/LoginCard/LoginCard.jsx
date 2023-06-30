import { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/auth'

import './LoginCard.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import ImportContactsIcon from '@mui/icons-material/ImportContacts'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Typography,
    TextField,
} from '@mui/material'

function LoginCard({ changeToSignup }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate()

    function updateEmail(inputValue) {
        setEmail(inputValue?.toLowerCase())
    }

    function updatePassword(inputValue) {
        setPassword(inputValue)
    }

    async function onLogin() {
        const dataInLogin = {
            email,
            password,
        }
        try {
            const apiResponse = await login(dataInLogin)
            localStorage.setItem('token', apiResponse.data.token)
            navigate('/home')
        } catch (error) {
            setErrorMessage(error.response.data.error)
            setTimeout(() => {
                setErrorMessage('')
            }, 3000)
        }
    }

    return (
        <Card className="card-style">
            <CardHeader className="title" title="Acceder"></CardHeader>
            <CardContent>
                <TextField
                    sx={{ marginBottom: '20px' }}
                    onChange={(e) => updateEmail(e.target.value)}
                    label="Email"
                    variant="outlined"
                    fullWidth
                />

                <TextField
                    onChange={(e) => updatePassword(e.target.value)}
                    label="Contraseña"
                    variant="outlined"
                    fullWidth
                />
                {errorMessage && (
                    <Typography color="error" textAlign="center" mt={2}>
                        {errorMessage}
                    </Typography>
                )}
            </CardContent>
            <Divider />
            <CardActions className="buttons-action">
                <Button onClick={() => changeToSignup()}>Registrar</Button>
                <Button onClick={() => onLogin()} color="success">
                    Acceder
                </Button>
            </CardActions>
            <Divider>
                <Typography sx={{ fontSize: '11px' }}>
                    INFORMACIÓN Y CONTACTO
                </Typography>
            </Divider>
            <CardActions
                className="button-insta"
                sx={{ display: 'flex', justifyContent: 'center' }}
            >
                <IconButton
                    component={Link}
                    to="https://www.instagram.com/serpica.sa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="insta"
                >
                    <InstagramIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    to="https://www.homelife.it/es/download/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                >
                    <ImportContactsIcon />
                </IconButton>
                <IconButton
                    component={Link}
                    to="https://api.whatsapp.com/send?phone=657422136"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whatsapp"
                >
                    <WhatsAppIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default LoginCard
