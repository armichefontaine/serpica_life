import { useState } from 'react'
import './Popup.css'

function Popup() {
    return (
        <div className="popup">
            <p>Hola</p>
        </div>
    )
}

export default function PopupButton() {
    const [isOpen, setIsOpen] = useState(false)

    function handleButtonClick() {
        setIsOpen(true)
    }

    function handleClose() {
        setIsOpen(false)
    }

    return (
        <div>
            <p onClick={handleButtonClick}>Mostrar Popup</p>
            {isOpen && (
                <div className="overlay" onClick={handleClose}>
                    <Popup />
                </div>
            )}
        </div>
    )
}
