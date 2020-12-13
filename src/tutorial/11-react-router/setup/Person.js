import React, { useState, useEffect } from 'react'
import { data } from '../../../data'
import { Link, useParams } from 'react-router-dom'

const Person = () => {
	let [name, setName] = useState('default name')
	let { id } = useParams() //  useParams() returns object so need object destructing

	useEffect(() => {
		let newPerson = data.find((person) => person.id === parseInt(id)) // getting that person's all info
		setName(newPerson.name)
	}, [])

	return (
		<div>
			<h2>{name}</h2>
			<Link to='/people' className='btn'>
				go to people
			</Link>
		</div>
	)
}

export default Person
