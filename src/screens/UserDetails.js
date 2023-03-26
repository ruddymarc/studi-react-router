import React from 'react';
import { useLocation } from 'react-router-dom'
/**
 * Show user details
 * @returns
 */
export default function UserDetails() {
  const { user } = useLocation().state;

  return (
    <>
      <h2>User details</h2>
      <p>This page show user { user.name } détails.</p>
    </>
  );
}
