import './ProductDetails.css'

import Breadcrumb from './Breadcrumb/Breadcrumb'
import Gallery from './Gallery/Gallery'
import Info from './Info/Info'
import PropTypes from 'prop-types'
import Tabs from './Tabs/Tabs'

const ProductDetails = ({ singleProduct }) => {
	return (
		<section className="single-product">
			<div className="container">
				<div className="single-product-wrapper">
					<Breadcrumb />
					<div className="single-content">
						<main className="site-main">
							<Gallery />
							<Gallery singleProduct={singleProduct} />
							<Info />
						</main>
					</div>
					<Tabs />
				</div>
			</div>
		</section>
	)
}

export default ProductDetails

ProductDetails.propTypes = {
	singleProduct: PropTypes.object
}
