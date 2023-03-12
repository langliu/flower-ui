import { Component, Host, Prop, h } from '@stencil/core'

import { cn } from '../../utils/utils'

@Component({
  tag: 'flower-input',
  styleUrl: 'flower-input.css',
  shadow: true,
})
export class FlowerInput {
  @Prop() value?: string
  @Prop() placeholder?: string
  @Prop() disabled?: boolean
  @Prop() readonly?: boolean
  @Prop() type?: string
  @Prop() maxlength?: number
  @Prop() class?: string

  render() {
    return (
      <Host>
        <slot></slot>
        <input
          class={cn(
            'flex h-10 w-full rounded-md border border-slate-300 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-50 dark:focus:ring-slate-400 dark:focus:ring-offset-slate-900',
            this.class,
          )}
          disabled={this.disabled}
          maxLength={this.maxlength}
          placeholder={this.placeholder}
          type={this.type}
          value={this.value}
          readonly={this.readonly}
        />
      </Host>
    )
  }
}
