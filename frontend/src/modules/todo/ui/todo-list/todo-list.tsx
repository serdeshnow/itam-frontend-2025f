import cl from './todo-list.module.css'
import MOCK_TODOS from '../../__mocks__/get-todos.json'

import { TodoCard } from '../todo-card/todo-card.tsx'
import type { Todo } from '@/shared/types'

type Props = {}

function TodoList({}: Props) {
  // Тут мы запрашиваем данные с бэкенда

  // CR_D

  return (
    <div className={cl.root}>
      <div>
        <input id="todo.input.create" type="text" />
        <button >Создать</button>
      </div>
      <ul className={cl.list}>
        {MOCK_TODOS.map((todo: Todo) => (
          <li className={cl.item}><TodoCard todo={todo} onDelete={() => null}/></li>
        ))}
      </ul>
    </div>
  )
}

export { TodoList }
