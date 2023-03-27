import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import UserLink from '../components/UserLink';
/**
 * Show search results or redirect to unknown route
 * @returns
 */
export default function Search() {
  const { search } = useLocation()
  const navigate = useNavigate()
  const [results, setResults] = useState(null)

  useEffect(() => {
    const query = new URLSearchParams(search)
    const userId = query.get('userId')
    
    if (userId) {
      // fetch user by id when search change
      fetch('https://jsonplaceholder.typicode.com/users/' + userId)
        .then(response => response.json())
        .then(json => setResults(<UserLink user={json} />))
        .catch(error => Promise.reject(error))
    } else {
      // redirect to unknown page
      return navigate('*')
    }
  }, [navigate, search])
  return (
    <>
      <h2>You are looking for user !</h2>
      { results }
    </>
  );
}
