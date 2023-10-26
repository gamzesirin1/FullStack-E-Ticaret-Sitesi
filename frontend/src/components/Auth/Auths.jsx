import './Auth.css'

import Login from './Login'
import Register from './Register'

const Auths = () => {
	return (
		<section className="account-page">
			<div className="container">
				<div className="account-wrapper">
					<Login />
					<Register />
				</div>
			</div>
		</section>
	)
}

export default Auths
