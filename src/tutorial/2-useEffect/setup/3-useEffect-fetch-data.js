import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
	let [users, setUsers] = useState([])

	let getUsers = async () => {
    let response = await fetch(url)
    let users = await response.json()
    setUsers(users)
    // console.log(users)
	}

	useEffect(() => {
    getUsers()
  }, [])
	return (
		<>
			<h3>Github users</h3>
      <ul className='users'>
        {users.map((user) => {
          let {id, login, avatar_url, html_url} = user 
          return (
				<li key={id}>
					<img src={avatar_url} alt={login} />
					<div>
						<h4>{login}</h4>
						<a href={html_url}>Profile</a>
					</div>
				</li>
			)
        })}
      </ul>
		</>
	)
}

export default UseEffectFetchData
