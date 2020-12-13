export let reducer = (state, action) => {
	if (action.type === 'ADD_ITEM') {
		let newPeople = [...state.people, action.payload]
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'add item'
		}
	}

	if (action.type === 'NO_VALUE') {
		return {
			...state,
			isModalOpen: true,
			modalContent: 'please enter value'
		}
	}

    // for disable modal after 2 sec
	if (action.type === 'CLOSE_MODAL') {
		return { ...state, isModalOpen: false }
	}

	if (action.type === 'REMOVE_ITEM') {
		let newPeople = state.people.filter(
			(person) => person.id !== action.payload
		)
		return {
			...state,
			people: newPeople,
			isModalOpen: true,
			modalContent: 'item removed'
		}
	}

	return state // must return 'state'
	throw new Error('No matching action type') // it's optional to catch error 
}
