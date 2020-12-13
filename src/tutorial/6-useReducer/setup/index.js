import React, { useState, useReducer } from 'react'
import Modal from './Modal'
import { data } from '../../../data'

// reducer function
import { reducer } from './reducer' // named export so '{ reducer }'

// initial state
let defaultState = {
	people: [],
	isModalOpen: false,
	modalContent: 'hello world'
}

const Index = () => {
	let [name, setName] = useState('')
	let [state, dispatch] = useReducer(reducer, defaultState) // useReducer hook

	let handleSubmit = (e) => {
		e.preventDefault()
		if (name) {
			let newItem = { id: new Date().getTime().toString(), name }
			dispatch({ type: 'ADD_ITEM', payload: newItem }) // adding multiple values in 'payload'
			setName('')
		} else {
			dispatch({ type: 'NO_VALUE' })
		}
	}

	// for disable modal
	let closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' })
	}

	return (
		<>
			{state.isModalOpen && (
				<Modal
					modalContent={state.modalContent}
					closeModal={closeModal}
				/>
			)}
			<form className='form' onSubmit={handleSubmit}>
				<div>
					<input
						type='text'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
					<button type='submit'>add</button>
				</div>
			</form>
			{state.people.map((person) => {
				return (
					<div key={person.id} className='item'>
						<h3>{person.name}</h3>
						<button
							onClick={() =>
								dispatch({
									type: 'REMOVE_ITEM',
									payload: person.id
								})
							}
						>
							remove
						</button>
					</div>
				)
			})}
		</>
	)
}

export default Index
