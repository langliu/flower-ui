import { Component, Host, Prop, h } from '@stencil/core'
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

  avatarVariants = cva(
    'flex h-full w-full items-center justify-center rounded-full bg-slate-100 dark:bg-slate-700',
    {
      variants: {
        size: {
          small: 'h-8 w-8',
          default: 'h-12 w-12',
          large: 'w-20 h-20',
        },
      },
      defaultVariants: {
        size: 'default',
      },
    },
  )

  render() {
    const { src, size, alt, avatarVariants } = this
    return (
      <Host>
        <img src={src} alt={alt} class={cn(avatarVariants({ size }))} />
      </Host>
    )
  }
}
