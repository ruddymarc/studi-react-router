import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

/**
 * Show main navigation
 * @returns 
 */
export default function Menu() {
  const style = ({ isActive, isPending}) => ({
    textDecoration: 'none',
    fontWeight: isActive ? 700 : '',
    color: isPending ? 'red' : 'inherit',
  })
  return (
    <Nav>
      <NavLink style={style} to='/'>Home</NavLink>
      <NavLink style={style} to='/infos'>Informations</NavLink>
      <NavLink style={style} to='/users'>Users</NavLink>
    </Nav>
  )
}