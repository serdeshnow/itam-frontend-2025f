import type { PropsWithChildren } from 'react'

type Props<T> = PropsWithChildren & {
  list: T[]
  renderItem: () => void
}

function List<T>({ list, children }: Props<T>) {
  return <ul>{children}</ul>
}

export { List }
