import { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'
import { cva } from 'class-variance-authority'

export type ButtonProps = {
  onClick?: () => void
  type?: 'primary' | 'dashed' | 'link' | 'text' | 'default'
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  block?: boolean
  children?: ReactNode
  /**
   * 设置按钮大小
   */
  size?: 'large' | 'middle' | 'small'
  /**
   * 设置按钮失效状态
   */
  disabled?: boolean
  /**
   * 设置 button 原生的 type 值，可选值请参考 HTML 标准
   */
  htmlType?: ButtonHTMLAttributes<HTMLButtonElement>['type']
  /**
   * 语义化结构 class
   */
  classNames?: string
}

const buttonStyles = cva(
  [
    'text-base',
    'text-white',
    'rounded-md',
    'm-2',
    'transition',
    'duration-500 ease select-none  focus:outline-none focus:shadow-outline',
  ],
  {
    variants: {
      type: {
        default: [
          'border',
          'border-gray-400',
          'text-black',
          'hover:text-indigo-500',
          'hover:border-indigo-500',
        ],
        primary: ['border', 'border-indigo-500', 'bg-indigo-500', 'hover:bg-indigo-600'],
        link: ['text-indigo-500', 'hover:text-indigo-600'],
        text: ['text-gray-700', 'hover:bg-gray-200'],
        dashed: [
          'border',
          'border-gray-400',
          'text-black',
          'hover:text-indigo-500',
          'hover:border-indigo-500',
          'border-dashed',
        ],
      },
      block: {
        true: ['w-full'],
      },
      size: {
        large: ['px-6', 'py-3'],
        middle: ['px-4', 'py-2'],
        small: ['px-2', 'py-1'],
      },
      disabled: {
        true: [
          'cursor-not-allowed',
          'bg-gray-200',
          'text-gray-400',
          'border',
          'hover:bg-gray-200',
          'border-gray-400',
        ],
      },
    },
    defaultVariants: {
      type: 'default',
      block: false,
      size: 'middle',
    },
  },
)

const Button: FC<ButtonProps> = ({
  type = 'default',
  block = false,
  size = 'middle',
  disabled = false,
  classNames,
  children,
  htmlType,
  onClick,
}) => {
  console.log('type', type)

  return (
    <button
      className={twMerge([buttonStyles({ type, block, size, disabled }), classNames])}
      onClick={onClick}
      type={htmlType}
    >
      {children}
    </button>
  )
}

export default Button
