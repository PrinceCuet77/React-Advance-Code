import React, { useState } from 'react'
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

const ControlledInputs = () => {
	let [person, setPerson] = useState({ firstName: '', email: '', age: '' })
	let [people, setPeople] = useState([])

	let handleChange = (e) => {
		let name = e.target.name
		let value = e.target.value
		setPerson({ ...person, [name]: value })
	}

	let handleSubmit = (e) => {
		e.preventDefault()
		if (person.firstName && person.email && person.age) {
			let newPerson = { ...person, id: new Date().getTime().toString() }
			setPeople([...people, newPerson])
			setPerson({ firstName: '', email: '', age: '' })
		}
	}

	return (
		<>
			<article>
				<form className='form'>
					<div className='form-control'>
						<label htmlFor='firstName'>Name : </label>
						<input
							type='text'
							id='firstName'
							name='firstName'
							value={person.firstName}
							onChange={handleChange}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Email : </label>
						<input
							type='email'
							id='email'
							name='email'
							value={person.email}
							onChange={handleChange}
						/>
					</div>
					<div className='form-control'>
						<label htmlFor='email'>Age : </label>
						<input
							type='text'
							id='age'
							name='age'
							value={person.age}
							onChange={handleChange}
						/>
					</div>
					<button type='submit' onClick={handleSubmit}>
						add person
					</button>
				</form>
				{people.map((person, index) => {
					const { id, firstName, email, age } = person
					return (
						<div className='item' key={id}>
							<h4>{firstName}</h4>
							<p>{age}</p>
							<p>{email}</p>
						</div>
					)
				})}
			</article>
		</>
	)
}

export default ControlledInputs
