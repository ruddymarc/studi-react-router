import React from 'react';

/**
 * Show an vertical nav
 * @param children 
 * @returns 
 */
export default function Nav({ children }) {
  return (
    <nav style={{
      gap: '.8em',
      display: 'flex',
      flexDirection: 'column',
    }}>
      { children }
    </nav>
  )
}
