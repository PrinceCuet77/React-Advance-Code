import React, { useEffect, useRef } from 'react'

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
	let refContainer = useRef(null)
	let refDiv = useRef(null)

	let handleSubmit = (e) => {
		e.preventDefault()
		console.log(refContainer.current.value)
		console.log(refDiv.current)
	}

	useEffect(() => {
		console.log(refContainer.current) 
		refContainer.current.focus()
	})

	return (
		<>
			<form className='form' onSubmit={handleSubmit}>
				<input type='text' ref={refContainer} />
				<button type='submit'>submit</button>
			</form>
			<div ref={refDiv}>hello world</div>
		</>
	)
}

export default UseRefBasics
