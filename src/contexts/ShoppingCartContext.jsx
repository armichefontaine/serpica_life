import React, { createContext, useState } from 'react'

export const CartContext = createContext(null)

export const ShoppingCartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    function addToCart(product) {
        const existingCartItemIndex = cart.findIndex(
            (item) => item.title == product.title
        )

        if (existingCartItemIndex > -1) {
            const updatedCart = [...cart]
            updatedCart[existingCartItemIndex].quantity += product.quantity
            setCart(updatedCart)
        } else {
            const newCartItem = { ...product }
            setCart([...cart, newCartItem])
        }
    }

    function removeFromCart(product) {
        const newCart = cart.filter((item) => item !== product)
        setCart(newCart)
    }

    function totalPriceCart(cart) {
        let total = 0
        cart.forEach((product) => {
            total += product.totalPrice
        })
        return total
    }

    return (
        <CartContext.Provider
            value={{ cart, setCart, addToCart, totalPriceCart, removeFromCart }}
        >
            {children}
        </CartContext.Provider>
    )
}
