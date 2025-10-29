import cl from './main.module.css'
import clsx from 'clsx'

import { useState } from 'react'

import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'


function MainPage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className={cl.logo} alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className={clsx(cl.logo, cl.react)} alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className={cl.card}>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className={cl.readTheDocs}>Click on the Vite and React logos to learn more</p>
    </>
  )
}

export { MainPage }
