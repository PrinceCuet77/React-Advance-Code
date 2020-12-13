import React, { useState } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

// prop drilling - If I have to pass any property from A component to C component then first I have to pass property from A to B then B to C. This is prop drilling.

const PropDrilling = () => {
	let [people, setPeople] = useState(data)

	let removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id)
		})
	}

	return (
		<section>
			<h3>prop drilling</h3>
			<List people={people} removePerson={removePerson} />
		</section>
	)
}

let List = ({ people, removePerson }) => {
	return (
		<>
			{people.map((person) => {
				return (
					<SinglePerson
						key={person.id}
						{...person}
						removePerson={removePerson}
					/>
				)
			})}
		</>
	)
}

let SinglePerson = ({ id, name, removePerson }) => {
	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	)
}

export default PropDrilling
