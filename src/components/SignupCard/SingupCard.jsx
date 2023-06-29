import { useState } from 'react'
import {
    Card,
    CardHeader,
    TextField,
    CardContent,
    Divider,
    Button,
    Typography,
    CardActions,
    FormControl,
    InputLabel,
    OutlinedInput,
    InputAdornment,
    IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'

import './SignupCard.css'

import { signup } from '../../services/auth'
import { sendEmail } from '../../services/sendEmail'

function SignupCard({ changeToLogin }) {
    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError] = useState(false)
    const [isRegistered, setIsRegistered] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        const formData = Object.fromEntries(new FormData(event.target))
        const { userName: nombre, email, password, confirmPassword } = formData

        if (password !== confirmPassword) {
            setPasswordError(true)
            return
        }
        const { data } = await signup(formData)

        await sendEmail({ nombre, email })

        return data
    }

    return (
        <div className="container">
            {isRegistered ? (
                <Card className="card-success">
                    <CardHeader
                        className="titulo"
                        title="Gracias por registrarte"
                    />
                    <CardContent>
                        <Typography>
                            En menos de 24 horas revisaremos tu solicitud.
                            Recibirás una notificación por correo electrónico
                            cuando esté aprobada.
                        </Typography>
                    </CardContent>
                    <CardActions className="button-back">
                        <Button onClick={() => changeToLogin()}>
                            Ir a Página de Inicio
                        </Button>
                    </CardActions>
                </Card>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Card className="card-form">
                        <CardHeader className="titulo" title="REGISTRO" />
                        <CardContent>
                            <TextField
                                name="userName"
                                label="Nombre"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                name="lastName"
                                label="Apellidos"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                name="cifDni"
                                label="CIF o DNI"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                name="phone"
                                label="Teléfono"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                name="address"
                                label="Dirección"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                name="email"
                                label="Email"
                                variant="outlined"
                                fullWidth
                            />
                            <TextField
                                error={passwordError}
                                onFocus={() => setPasswordError(false)}
                                name="password"
                                label="Contraseña"
                                type="password"
                                variant="outlined"
                                fullWidth
                            />
                            <FormControl fullWidth variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    onFocus={() => setPasswordError(false)}
                                    error={passwordError}
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                        </CardContent>
                        <Divider className="divider" />
                        <CardActions className="buttons-register">
                            <Button onClick={() => changeToLogin()}>
                                volver atras
                            </Button>
                            <Button color="success" type="submit">
                                GUARDAR
                            </Button>
                        </CardActions>
                    </Card>
                </form>
            )}
        </div>
    )
}

export default SignupCard
