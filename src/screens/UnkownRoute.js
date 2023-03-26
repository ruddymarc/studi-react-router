import React from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Show unknown route content
 * @returns 
 */
export default function UnknownRoute() {
  const { pathname } = useLocation();
  return (
    <div style={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <h2>Oups! An occurent error in a route</h2>
      <p>This { pathname } path not found.</p>
    </div>
  )
}