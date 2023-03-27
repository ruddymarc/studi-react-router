import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../components/Menu';
import SearchForm from '../components/SearchForm';
 
/**
 * Show main layout
 * @returns 
 */
export default function Layout() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'grid',
      gridTemplateColumns: '15em 1fr',
      gridTemplateRows: '1fr auto',
    }}>
      <aside style={{
        padding: '1rem',
      }}>
        <Menu />
        <SearchForm />
      </aside>
      <main>
        <Outlet />
      </main>
      <footer style={{
        gridColumn: '1 / 3',
        textAlign: 'center',
      }}>
        This app is made with 💕 by
        <a href="https://github.com/ruddymarc/studi-react-router.git">
          Ruddy
        </a>
      </footer>
    </div>
  )
}
