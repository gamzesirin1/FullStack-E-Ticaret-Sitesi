import { CartContext } from '../../context/CartProvider'
import PropTypes from 'prop-types'
import { useContext } from 'react'

const CartItem = ({ cartItem }) => {
	const { removeFromCard } = useContext(CartContext)

	return (
		<tr className="car-item">
			<td className="cart-image">
				<img src={cartItem?.img[0]} alt="" />
				<i className="bi bi-x delete-cart" onClick={() => removeFromCard(cartItem._id)}></i>
			</td>
			<td>{cartItem?.name}</td>
			<td>${cartItem?.price?.toFixed(2)}</td>
			<td className="product-quantity">{cartItem?.quantity}</td>
			<td className="product-subtotal">${(cartItem?.price * cartItem?.quantity).toFixed(2)}</td>
		</tr>
	)
}

export default CartItem

CartItem.propTypes = {
	cartItem: PropTypes.object
}
