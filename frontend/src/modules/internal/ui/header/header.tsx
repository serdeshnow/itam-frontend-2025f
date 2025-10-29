import { NavLink } from 'react-router'

import { routes } from '@/shared/config'

function Header() {
  return <header className=''>
    <nav>
      <NavLink to={routes.main}>Главная</NavLink>
      <NavLink to={routes.todos}>Список задач</NavLink>
    </nav>
  </header>
}

export { Header }
