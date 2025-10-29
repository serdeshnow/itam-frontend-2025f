import cl from './layout.module.css'

import { Outlet } from 'react-router'

import { Header } from '../header/header.tsx'

function Layout() {
  return (
    <div className={cl.root}>
      <Header />
      <main className={cl.main}>
        <Outlet />
      </main>
    </div>
  )
}

export { Layout }
