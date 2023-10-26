import './Reviews.css'

import PropTypes from 'prop-types'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'

const Reviews = ({ active }) => {
	return (
		<div className={`tab-panel-reviews ${active}`}>
			<h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
			<div className="comments">
				<ol className="comment-list">
					<ReviewItem />
					<ReviewItem />
				</ol>
			</div>
			{/* comment form start */}
			<div className="review-form-wrapper">
				<h2>Add a review</h2>
				<ReviewForm />
			</div>
			{/* comment form end */}
		</div>
	)
}

export default Reviews

Reviews.propTypes = {
	active: PropTypes.string
}
