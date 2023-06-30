import React, { useState } from 'react'
import './ProductQuantity.css'

function ProductQuantity({ valor = 1, actualizarValor, vertical = false }) {
    const [quantity, setQuantity] = useState(valor)

    function increase() {
        const newQuantity = quantity + 1
        setQuantity(newQuantity)
        actualizarValor(newQuantity)
    }

    function decrease() {
        const newQuantity = quantity - 1
        if (newQuantity >= 1) {
            setQuantity(newQuantity)
            actualizarValor(newQuantity)
        }
    }

    return (
        <>
            {vertical ? (
                <div className="containerVertical">
                    <button className="quantityButton" onClick={increase}>
                        +
                    </button>
                    <input
                        className="inputVerticalText"
                        type="text"
                        value={quantity}
                        readOnly
                    />
                    <button className="quantityButton" onClick={decrease}>
                        -
                    </button>
                </div>
            ) : (
                <div className="container">
                    <button className="quantityButton" onClick={decrease}>
                        -
                    </button>
                    <input
                        className="inputText"
                        type="text"
                        value={quantity}
                        readOnly
                    />
                    <button className="quantityButton" onClick={increase}>
                        +
                    </button>
                </div>
            )}
        </>
    )
}

export default ProductQuantity
