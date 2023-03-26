import React, { useState, useEffect } from 'react';
import Nav from '../components/Nav';
import UserLink from '../components/UserLink';

/**
 * Show user list
 * @returns 
 */
export default function UserList() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    // fetch user list before UserList mount
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => { setUsers(json) })
      .catch(error => Promise.reject(error))
  }, [])
  
  return (
    <>
      <h2>Users</h2>
      <Nav>
        {users.map((user) => (
          <UserLink user={user} />
        ))}
      </Nav>
    </>
  );
}
