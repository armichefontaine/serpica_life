import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Slide from '@mui/material/Slide'
import './ShopDialog.css'

import Carousel from '../../components/Casousel/Carousel'
import { Divider } from '@mui/material'
import { Link } from 'react-router-dom'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
})

export default function AlertDialogSlide() {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <div className="cart-container">
            <Button variant="outlined" onClick={handleClickOpen}>
                Slide in alert dialog
            </Button>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>Casi has terminado tu compra</DialogTitle>
                <DialogContent className="shopDialog">
                    <DialogContentText>
                        Tómate un momento y asegurate de revisar a que no te
                        falte componente o accesorio para realizar tu
                        instalación.
                    </DialogContentText>
                </DialogContent>
                <DialogContent className="shopDialog">
                    <Carousel />
                </DialogContent>
                <Divider />
                <DialogActions
                    sx={{ display: 'flex', justifyContent: 'space-between' }}
                >
                    <Button onClick={handleClose}>ATRÁS</Button>
                    <Link className="cardBtn" to="/shopping-cart">
                        VER RESUMEN Y PAGAR
                    </Link>
                </DialogActions>
            </Dialog>
        </div>
    )
}
