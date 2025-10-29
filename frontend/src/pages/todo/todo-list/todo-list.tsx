import cl from './todo-list.module.css'

import { TodoList } from '@/modules/todo/ui'


function TodoListPage() {
  return (
    <>
      <h2 className={cl.title}>Не забудь выполнить!</h2>
      <TodoList />
    </>
  )
}

export { TodoListPage }
