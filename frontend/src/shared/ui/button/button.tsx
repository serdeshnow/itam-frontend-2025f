import clsx from 'clsx'
import cl from './button.module.css'
import { type HTMLAttributes } from 'react'

type Props = HTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'outlined' | 'transparent'
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
}

function Button(props: Props) {
  const { variant = 'primary', size = 'md', children, ...rest } = props

  return (
    <button className={clsx(cl.root, cl[`variant-${variant}`], cl[`size-${size}`])} {...rest}>
      {children}
    </button>
  )
}

export { Button }