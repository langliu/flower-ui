import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'a-button',
  styleUrl: 'a-button.css',
  shadow: true,
})
export class AButton {
  @Prop() title: string;
  render() {
    return (
      <Host>
        <button class={'a-button'} title={this.title}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
