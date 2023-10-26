import './ProductDetails.css'

import Breadcrumb from './Breadcrumb/Breadcrumb'
import Gallery from './Gallery/Gallery'
import Info from './Info/Info'
import Tabs from './Tabs/Tabs'

const ProductDetails = () => {
	return (
		<section className="single-product">
			<div className="container">
				<div className="single-product-wrapper">
					{/* breadcrumb start */}
					<Breadcrumb />
					{/* breadcrumb end */}
					{/* site main start */}
					<div className="single-content">
						<main className="site-main">
							<Gallery />
							<Info />
						</main>
					</div>
					{/* site main end */}
					{/* tabs start */}
					<Tabs />
					{/* tabs end */}
				</div>
			</div>
		</section>
	)
}

export default ProductDetails
