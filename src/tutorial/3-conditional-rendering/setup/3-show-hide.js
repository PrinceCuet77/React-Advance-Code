import React, { useState, useEffect } from 'react'

const ShowHide = () => {
	let [show, setShow] = useState(false)
	return (
		<>
			<button className='btn' onClick={() => setShow(!show)}>
				show/hide
			</button>
			{show && <Item />}
		</>
	)
}

let Item = () => {
	let [size, setSize] = useState(window.innerWidth)
	let checkSize = () => {
		setSize(window.innerWidth)
	}
	useEffect(() => {
    window.addEventListener('resize', checkSize)
    return ()=> {
      window.removeEventListener('resize', checkSize)
    }
	}, [])
	return (
		<div style={{ marginTop: '2rem' }}>
			<h1>Window</h1>
			<h2>Size : {size} px</h2>
		</div>
	)
}

export default ShowHide
