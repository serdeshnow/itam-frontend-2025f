import { BrowserRouter, Route, Routes } from 'react-router'

import { routes } from '@/shared/config'

import { MainPage } from '../../pages/main/main.tsx'
import { TodoListPage } from '../../pages/todo/todo-list/todo-list.tsx'
import { Layout } from '@/modules/internal/ui'

function RouterProvider() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main} element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path={routes.todos} element={<TodoListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export { RouterProvider }
