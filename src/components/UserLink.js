import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Show link to user page
 * @returns 
 */
export default function UserLink({ user }) {
  const { id, name } = user;
  return (
    <Link key={`user_${id}`} to={`/user/${id}`} state={{ user }}>{ name }</Link>
  )
}

