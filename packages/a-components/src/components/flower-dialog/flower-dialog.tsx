import { Component, Host, Prop, h } from '@stencil/core'

@Component({
  tag: 'flower-dialog',
  styleUrl: 'flower-dialog.css',
  shadow: true,
})
export class FlowerDialog {
  @Prop() dialogId: string
  render() {
    return (
      <Host>
        <dialog id={this.dialogId}>
          <slot></slot>
          <p>123W</p>
        </dialog>
      </Host>
    )
  }
}
