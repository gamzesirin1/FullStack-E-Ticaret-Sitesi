import { createContext, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

const CartContext = createContext()

const CartProvider = ({ children }) => {
	const [cartItems, setCartItems] = useState(
		localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : []
	)

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems))
	}, [cartItems])

	console.log('cart items 1:', cartItems)

	const addToCart = (cartItem) => {
		// setCartItems([...cartItems, cartItem]); 1. yol
		setCartItems((prevCart) => [
			...prevCart,
			{
				...cartItem,
				quantity: cartItem.quantity ? cartItem.quantity : 1
			}
		])
	}
	const removeFromCard = (itemId) => {
		const filteredCartItems = cartItems.filter((cartItem) => {
			return cartItem._id !== itemId
		})

		setCartItems(filteredCartItems)
	}

	return <CartContext.Provider value={{ addToCart, removeFromCard, cartItems }}>{children}</CartContext.Provider>
}

export default CartProvider

export { CartContext }

CartProvider.propTypes = {
	children: PropTypes.node
}
