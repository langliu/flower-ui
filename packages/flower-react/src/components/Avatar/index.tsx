import { FC, useState } from 'react'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

export type AvatarProps = {
  size?: 'default' | 'small' | 'large'
  alt?: string
  src: string
  fallback?: string
}

const avatarVariants = cva(
  'flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700 dark:text-white text-black overflow-hidden',
  {
    variants: {
      size: {
        small: 'h-8 w-8',
        default: 'h-12 w-12 text-2xl',
        large: 'w-20 h-20 text-5xl',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)

const Avatar: FC<AvatarProps> = ({ size = 'default', src, alt, fallback }) => {
  const [isLoadError, setIsLoadError] = useState(false)
  const handleError = () => {
    setIsLoadError(true)
  }
  if (isLoadError) {
    return <span className={twMerge(avatarVariants({ size }))}>{fallback}</span>
  }
  return (
    <img src={src} alt={alt} className={twMerge(avatarVariants({ size }))} onError={handleError} />
  )
}

export default Avatar
