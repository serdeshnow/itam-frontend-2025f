import cl from './todo-card.module.css'
import type { Todo } from '@/shared/types'
import { useState } from 'react'

type Props = {
  todo: Todo
  onDelete?: () => void
  onUpdate?: () => void
}

function TodoCard(props: Props) {
  const { todo } = props
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [text, setText] = useState(todo.text)

  const handleChange = () => {

  }

  // __U_

  return (
    <div className={cl.root}>
      <input id={`todo.checkbox.${todo.id}`} type='checkbox' checked={todo.completed} />
      {isEditing ? <input value={text} onChange={handleChange} /> : <p>{todo.text}</p>}
    </div>
  )
}

export { TodoCard }
