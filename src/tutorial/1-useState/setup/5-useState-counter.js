import React, { useState } from 'react'

const UseStateCounter = () => {
	let [value, setValue] = useState(0)

	let reset = () => {
		setValue(0)
	}

	let complex = () => {
		setTimeout(() => {
			setValue((prevState) => {
				return prevState + 1
			})
		}, 2000)
	}
	return (
		<>
			<section style={{ margin: '0.4rem 0' }}>
				<h2>Regular Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={() => setValue(value - 1)}>
					Decrease
				</button>
				<button className='btn' onClick={reset}>
					reset
				</button>
				<button className='btn' onClick={() => setValue(value + 1)}>
					Increase
				</button>
			</section>{' '}
			<br />
			<section style={{ margin: '0.4rem 0' }}>
				<h2>More Complex Counter</h2>
				<h1>{value}</h1>
				<button className='btn' onClick={complex}>
					Increase Later
				</button>
			</section>
		</>
	)
}

export default UseStateCounter
