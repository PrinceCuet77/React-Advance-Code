import { useState, useEffect, useCallback } from 'react'

// custom hook - useFetch
export const useFetch = (url) => {
	const [loading, setLoading] = useState(true)
	const [products, setProducts] = useState([])

	const getProducts = useCallback(async () => {
		// fetching data from api
		const response = await fetch(url)
		const products = await response.json()

		setProducts(products)
		setLoading(false)
	}, [url])

	useEffect(() => {
		getProducts()
	}, [url, getProducts]) // loading for once when url is changed

	return { loading, products }
}
