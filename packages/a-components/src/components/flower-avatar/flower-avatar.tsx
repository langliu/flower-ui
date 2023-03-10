import { Component, Host, Prop, h, State } from '@stencil/core'
import { cva } from 'class-variance-authority'

import { cn } from '../../utils/utils'

@Component({
  tag: 'flower-avatar',
  styleUrl: 'flower-avatar.css',
  shadow: true,
})
export class FlowerAvatar {
  @Prop() src: string

  @Prop() alt?: string

  @Prop() size?: 'default' | 'small' | 'large' = 'default'

  @Prop() fallback?: string

  @State() isLoadError = false

  avatarVariants = cva(
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

  handleError = () => {
    console.log('handleError')
    this.isLoadError = true
  }

  render() {
    const { src, size, alt, isLoadError, fallback, avatarVariants, handleError } = this
    console.log('isLoadError', isLoadError, fallback)

    return (
      <Host>
        {!isLoadError ? (
          <img src={src} alt={alt} class={cn(avatarVariants({ size }))} onError={handleError} />
        ) : (
          <span class={cn(avatarVariants({ size }))}>{fallback}</span>
        )}
      </Host>
    )
  }
}
