import cl from './main.module.css'
import clsx from 'clsx'

import { useEffect, useState } from 'react'

import reactLogo from '/images/react.svg'
import viteLogo from '/images/vite.svg'
import { Button } from '@/shared/ui/button/button'
import type { Todo } from '@/shared/types'

function MainPage() {
  const [count, setCount] = useState(0)

  const url = 'http://109.73.206.70:8080/api'

  const createBody: Omit<Todo, 'id'> = {
    text: 'text',
    completed: false
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleFetch()
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const handleFetch = async () => {
    try {
      const response = await fetch(`${url}/todos`).then((r) => r.json())
      console.log('successfully responded')

      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }

  const handleCreate = async () => {
    try {
      const response = await fetch(`${url}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(createBody)
      }).then((r) => r.json())
      console.log('successfully responded')

      console.log(response)
    } catch (e) {
      console.error(e)
    }
  }

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
      <Button size='lg' onClick={handleFetch}>
        Primary Lg
      </Button>
      <hr />
      <Button variant='secondary' onClick={handleCreate}>
        Secondary Md
      </Button>
    </>
  )
}

export { MainPage }
