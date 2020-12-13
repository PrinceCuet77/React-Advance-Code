import React, { useState } from 'react'
// useState - function

// General rules of hooks
// use
// component name must be uppercase 
// must be in the functional/component body
// can't call conditionally

const UseStateBasics = () => {
	// console.log(useState('Hello world'))
	// const value = useState(1)[0]
	// const handler = useState(1)[1]
	// console.log(value, handler)
	const [text, setText] = useState('random title')

	const handleClick = () => {
    if ( text === 'random title') {
    setText('hello world')
    } else {
      setText('random title')
    }
	}

	return (
		<React.Fragment>
			<h1>{text}</h1>
			<button className='btn' onClick={handleClick}>
				{' '}
				Change title
			</button>
		</React.Fragment>
	)
}

export default UseStateBasics
