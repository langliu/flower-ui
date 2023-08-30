import { FC, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

type InputProps = {
  placeholder?: string
  prefix?: ReactNode
  disabled?: boolean
  id?: string
  name?: string
}

const input = cva(
  [
    'block w-full rounded-md border-0 py-1.5  pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6 flex-shrink',
  ],
  {
    variants: {
      size: {
        default: 'h-10 py-2 px-4',
        small: 'h-9 px-2 rounded-md',
        large: 'h-11 px-8 rounded-md',
      },
      disabled: {
        true: ['cursor-not-allowed'],
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const Input: FC<InputProps> = ({ placeholder, prefix, disabled = false, id, name }) => {
  return (
    <div className='relative mt-2 rounded-md shadow-sm '>
      {prefix && (
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {prefix}
        </div>
      )}
      <input
        type='text'
        name={name}
        id={id}
        className={twMerge(input({ disabled }), prefix ? 'pl-7' : 'pl-3')}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  )
}

export default Input
