import { CartContext } from '../../context/CartProvider'
import PropTypes from 'prop-types'
import { useContext } from 'react'

const CartItem = ({ cartItem }) => {
	const { removeFromCard } = useContext(CartContext)

	return (
		<tr className="car-item">
			<td className="cart-image">
				<img src={cartItem?.img?.singleImage} alt="" />
				<i className="bi bi-x delete-cart" onClick={() => removeFromCard(cartItem.id)}></i>
			</td>
			<td>{cartItem?.name}</td>
			<td>${cartItem?.price?.newPrice.toFixed(2)}</td>
			<td className="product-quantity">{cartItem?.quantity}</td>
			<td className="product-subtotal">${(cartItem?.price?.newPrice * cartItem?.quantity).toFixed(2)}</td>
		</tr>
	)
}

export default CartItem

CartItem.propTypes = {
	cartItem: PropTypes.object
}
