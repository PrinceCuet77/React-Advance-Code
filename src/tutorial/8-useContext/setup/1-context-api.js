import React, { useState, useContext } from 'react'
import { data } from '../../../data'

// more components
// fix - context api, redux (for more complex cases)

let PersonContext = React.createContext() // creating context
// also have two components - Provider, Consumer

const ContextAPI = () => {
	const [people, setPeople] = useState(data)
	const removePerson = (id) => {
		setPeople((people) => {
			return people.filter((person) => person.id !== id)
		})
  }
  
	return (
		<PersonContext.Provider value={{ removePerson, people }}> {/* wrapping with context with provider and passing value */}
			<h3>Context API / useContext </h3>
			<List />
		</PersonContext.Provider>
	)
}

const List = () => {
  let mainData = useContext(PersonContext) // grapping context value

	return (
		<>
			{mainData.people.map((person) => {
				return <SinglePerson key={person.id} {...person} />
			})}
		</>
	)
}

const SinglePerson = ({id, name}) => {
	let { removePerson } = useContext(PersonContext) // grapping context value with object destructure

	return (
		<div className='item'>
			<h4>{name}</h4>
			<button onClick={() => removePerson(id)}>remove</button>
		</div>
	)
}

export default ContextAPI
