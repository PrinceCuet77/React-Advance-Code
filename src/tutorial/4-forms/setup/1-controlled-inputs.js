import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
	let [firstName, setFirstName] = useState('') // for 'firstName' input field
	let [email, setEmail] = useState('') // for 'email' input field 
	let [people, setPeople] = useState([]) // make a list of all input field 

	let handleSubmit = (e) => {
		e.preventDefault() // prevent to go another page to refresh

		if (firstName && email) {
			let person = {
				id: new Date().getTime().toString(), // generate unique id
				firstName,
				email
			}

			// make a list of added people
			setPeople((people) => {
				return [...people, person]
			})

			// after refresh two fields will be empty
			setFirstName('')
			setEmail('')
		} else {
			console.log('empty values')
		}
	}

	return (
		<>
			<article>
				<form className='form' onSubmit={handleSubmit}>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<button type='submit'>add person</button>
				</form>
				{/* for display list which one I added */}
				{people.map((person) => {
					let { id, firstName, email } = person
					return (
						<div key={id} className='item'>
							<h4>{firstName}</h4>
							<p>{email}</p>
						</div>
					)
				})}
			</article>
		</>
	)
}

export default ControlledInputs
