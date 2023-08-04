import { FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export type ButtonProps = {
  onClick?: () => void
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  children?: ReactNode
}

const buttonStyles = cva(
  [
    'text-base',
    'border',
    'text-white',
    'rounded-md',
    'px-4',
    'py-2',
    'm-2',
    'transition',
    'duration-500 ease select-none  focus:outline-none focus:shadow-outline',
  ],
  {
    variants: {
      type: {
        default: ['border-gray-200', 'bg-gray-200', 'hover:bg-gray-300', 'text-gray-700'],
        primary: ['border-indigo-500', 'bg-indigo-500', 'hover:bg-indigo-600'],
        link: ['text-indigo-500', 'hover:text-indigo-600'],
        text: ['text-gray-700', 'hover:text-gray-800'],
        dashed: [],
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

const Button: FC<ButtonProps> = ({ type = 'default', onClick, children }) => {
  console.log('type', type)

  return (
    <button className={twMerge(buttonStyles({ type }))} onClick={onClick} type={'button'}>
      {children}
    </button>
  )
}

export default Button
