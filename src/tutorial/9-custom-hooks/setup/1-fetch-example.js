import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// api
const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
	let {loading, products} = useFetch(url) // custome hook for store data from api
  
	return (
		<div>
			<h2>{loading ? 'loading...' : 'data'}</h2>
		</div>
	)
}

export default Example
