import type { PropsWithChildren } from "react"

type Props = PropsWithChildren & {
  title: string
}

function Card(props: Props) {
  const { title, children } = props

  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  )
}

export { Card }

