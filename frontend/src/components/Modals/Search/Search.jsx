import './Search.css'

import PropTypes from 'prop-types'

const Search = ({ showSearch, setShowSearch }) => {
	return (
		<div className={`modal-search ${showSearch ? 'show' : ''}`}>
			<div className="modal-wrapper">
				<h3 className="modal-title">Search for products</h3>
				<p className="modal-text">Start typing to see products you are looking for.</p>
				<form className="search-form">
					<input type="text" placeholder="Search a product" />
					<button>
						<i className="bi bi-search" />
					</button>
				</form>
				<div className="search-results">
					<div className="search-heading">
						<h3>RESULTS FROM PRODUCT</h3>
					</div>
					<div className="results">
						<a href="#" className="result-item">
							<img src="img/products/product1/1.png" className="search-thumb" alt />
							<div className="search-info">
								<h4>Analogue Resin Strap</h4>
								<span className="search-sku">SKU: PD0016</span>
								<span className="search-price">$108.00</span>
							</div>
						</a>
						<a href="#" className="result-item">
							<img src="img/products/product2/1.png" className="search-thumb" alt />
							<div className="search-info">
								<h4>Analogue Resin Strap</h4>
								<span className="search-sku">SKU: PD0016</span>
								<span className="search-price">$108.00</span>
							</div>
						</a>
					</div>
				</div>
				<i className="bi bi-x-circle" id="close-search" onClick={() => setShowSearch(false)} />
			</div>
			<div className="modal-overlay" onClick={() => setShowSearch(false)}></div>
		</div>
	)
}

export default Search

Search.propTypes = {
	showSearch: PropTypes.bool,
	setShowSearch: PropTypes.func
}
