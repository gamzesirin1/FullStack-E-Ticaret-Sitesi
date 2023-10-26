import CampaignSingle from '../components/CampaignSingle/CampaignSingle'
import Categories from '../components/Categories/Categories'
import { Fragment } from 'react'
import Products from '../components/Products/Products'

const ShopPage = () => {
	return (
		<Fragment>
			<Categories />
			<Products />
			<CampaignSingle />
			<Products />
		</Fragment>
	)
}

export default ShopPage
