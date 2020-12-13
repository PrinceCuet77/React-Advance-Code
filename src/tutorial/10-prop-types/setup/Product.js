import React from 'react'
import PropTypes from 'prop-types'
import defaultImage from '../../../assets/default-image.jpeg'

const Product = ({ image, name, price }) => {
  let url = image && image.url // when image is undefine or false then url is undefine otherwise it's image link

	return (
		<article className='product'>
			<img src={url || defaultImage} alt={name || 'default name'} />
			<h4>{name}</h4>
			<p>${price || 3.99}</p>
		</article>
	)
}

// conformation for all missing value is required
Product.propTypes = {
	image: PropTypes.object.isRequired,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired
}

// default setup for all missing value
// Product.defaultProps = {
// 	name: 'default name',
// 	price: 3.99,
// 	image: defaultImage
// }

export default Product
