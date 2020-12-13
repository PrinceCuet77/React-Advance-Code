import React, { useState, useEffect } from 'react'
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
	let [value, setValue] = useState(0)

	useEffect(() => {
		console.log('Call useEffect')
		if (value >= 1) {
			document.title = `NewMessage(${value})`
		}
  }, [value])
  
  // initial render useEffect 
  useEffect(() => {
    console.log('Hello World')
  }, [])

	console.log('Render component')
	return (
		<>
			<h1>{value}</h1>
			<button className='btn' onClick={() => setValue(value + 1)}>
				Click Me
			</button>
		</>
	)
}

export default UseEffectBasics
