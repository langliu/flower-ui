import { Component, Host, h, Prop } from '@stencil/core'
import { cva } from 'class-variance-authority'

import { cn } from '~/utils/utils'

@Component({
  tag: 'flower-button',
  styleUrl: 'flower-button.css',
  shadow: true,
})
export class FlowerButton {
  @Prop() variant: 'default' | 'destructive' | 'outline' | 'subtle' | 'ghost' | 'link' = 'default'

  @Prop() size: 'small' | 'default' | 'large' = 'default'
  @Prop() class?: string
  @Prop() block?: boolean = false

  buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 dark:hover:bg-slate-800 dark:hover:text-slate-100 disabled:opacity-50 dark:focus:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900 data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
    {
      variants: {
        variant: {
          default:
            'bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900',
          destructive: 'bg-red-500 text-white hover:bg-red-600 dark:hover:bg-red-600',
          outline:
            'bg-transparent border border-slate-200 hover:bg-slate-100 dark:border-slate-700 dark:text-slate-100',
          subtle:
            'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-700 dark:text-slate-100',
          ghost:
            'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-100 dark:hover:text-slate-100 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
          link: 'bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent',
        },
        size: {
          default: 'h-10 py-2 px-4',
          small: 'h-9 px-2 rounded-md',
          large: 'h-11 px-8 rounded-md',
        },
        block: {
          true: 'w-full',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    },
  )

  render() {
    const { buttonVariants, variant, size, block, class: className } = this
    return (
      <Host>
        <button class={cn(buttonVariants({ variant, size, block, className }))}>
          <slot></slot>
        </button>
      </Host>
    )
  }
}
