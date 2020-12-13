import React from 'react'
import Product from './Product'

// custom hook
import { useFetch } from '../../9-custom-hooks/final/2-useFetch'

// api
const url = 'https://course-api.com/react-prop-types-example'

const Index = () => {
  const { products } = useFetch(url) // custom hook 
  
	return (
		<div>
			<h2>products</h2>
			<section className='products'>
				{products.map((product) => {
					return <Product key={product.id} {...product} />
				})}
			</section>
		</div>
	)
}

export default Index
