import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
	let [isLoading, setIstLoading] = useState(true)
	let [isError, setIsError] = useState(false)
	let [user, setUser] = useState('default user')

	useEffect(() => {
		fetch(url)
			.then((resp) => {
				if (resp.status >= 200 && resp.status <= 299) {
					return resp.json()
				} else {
					setIstLoading(false)
					setIsError(true)
					throw new Error(resp.status)
				}
			})
			.then((user) => {
				const { login } = user
				setUser(login)
				setIstLoading(false)
			})
			.catch((error) => console.log(error))
	}, [])

	if (isLoading)
		return (
			<div>
				<h1>Loading...</h1>
			</div>
		)
	if (isError)
		return (
			<div>
				<h1>Error...</h1>
			</div>
		)
	return <h2>{user}</h2>
}

export default MultipleReturns
