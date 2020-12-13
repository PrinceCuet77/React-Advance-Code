import React, { useState } from 'react'

const UseStateObject = () => {
	let [people, setPeople] = useState({
		name: 'prince',
		age: 22,
		message: 'random message'
	})

	let changeMessage = () => {
		setPeople({ ...people, message: 'hello world' })
	}
	return (
		<>
			<h3>{people.name}</h3>
			<h3>{people.age}</h3>
			<h4>{people.message}</h4>
			<button className='btn' onClick={changeMessage}>
				Change message
			</button>
		</>
	)
}

export default UseStateObject
