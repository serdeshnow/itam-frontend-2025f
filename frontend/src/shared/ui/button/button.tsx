import type { HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement> & {}

function Button({...rest}: Props) {

  return (
    <button {...rest}>button</button>
  )
}

export { Button }