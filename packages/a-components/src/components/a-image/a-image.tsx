import { Component, Element, Host, h, Prop, Listen, State } from '@stencil/core';
import { throttle } from 'lodash-es';

import { isInContainer } from '~/utils/utils';

@Component({
  tag: 'a-image',
  styleUrl: 'a-image.css',
  shadow: true,
})
export class AImage {
  @Prop() src: string;
  /**
   * 是否开启懒加载
   */
  @Prop() lazy: boolean = false;
  /**
   * 图片填充方式
   */
  @Prop() fit: 'none' | 'contain' | 'cover' | 'fill' | 'scale-down' = 'none';
  /**
   * 加载文案
   */
  @Prop() placeholder?: string;
  /**
   * 错误文案
   */
  @Prop() errorText?: string;
  @State() show: boolean = false;
  @Element() element: HTMLElement;

  private _scrollContainer: HTMLElement | (Window & typeof globalThis);
  private _handleLazyLoad: any;

  handleLazyLoad() {
    if (this.show) return;
    if (isInContainer(this.element, this._scrollContainer as HTMLElement)) {
      this.show = true;
    }
  }

  @Listen('scroll', { target: 'window', capture: true })
  handleScroll() {
    if (!this.lazy) return;
    this._handleLazyLoad();
  }

  componentWillLoad() {
    this._handleLazyLoad = throttle(this.handleLazyLoad, 200);
  }

  render() {
    return (
      <Host class={'image'}>
        <slot></slot>
        <span class={'image'}>Image</span>
      </Host>
    );
  }
}
