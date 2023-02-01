import { Component, Host, h, Prop } from '@stencil/core';
import classNames from 'classnames';

type ButtonType = 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default';

@Component({
  tag: 'a-button',
  styleUrl: 'a-button.css',
  shadow: true,
})
export class AButton {
  /**
   * 将按钮宽度调整为其父宽度的选项
   */
  @Prop() block?: boolean = false;
  /**
   * 设置危险按钮
   */
  @Prop() danger?: boolean = false;
  /**
   * 按钮失效状态
   */
  @Prop() disabled?: boolean = false;
  /**
   * 幽灵属性，使按钮背景透明
   */
  @Prop() ghost?: boolean = false;
  /**
   * 点击跳转的地址，指定此属性 button 的行为和 a 链接一致
   */
  @Prop() href?: string;
  /**
   * 设置 button 原生的 type 值，可选值请参考 HTML 标准
   */
  @Prop() htmlType?: string = 'button';
  /**
   * 设置按钮形状
   */
  @Prop() shape?: 'default' | 'circle' | 'round' = 'default';
  /**
   * 设置按钮大小
   */
  @Prop() size?: 'large' | 'middle' | 'small' = 'middle';
  /**
   * 	相当于 a 链接的 target 属性，href 存在时生效
   */
  @Prop() target?: string;
  /**
   * 设置按钮类型
   */
  @Prop() type?: 'primary' | 'ghost' | 'dashed' | 'link' | 'text' | 'default' = 'default';

  isUnBorderedButtonType(type: ButtonType | undefined) {
    return type === 'text' || type === 'link';
  }

  render() {
    const prefixCls = 'a-button';
    const classes = classNames(prefixCls, {
      [`${prefixCls}-${this.shape}`]: this.shape !== 'default' && this.shape, // Note: Shape also has `default`
      [`${prefixCls}-${this.type}`]: this.type,
      // [`${prefixCls}-${sizeCls}`]: sizeCls,
      // [`${prefixCls}-icon-only`]: !children && children !== 0 && !!iconType,
      [`${prefixCls}-background-ghost`]: this.ghost && !this.isUnBorderedButtonType(this.type),
      // [`${prefixCls}-loading`]: innerLoading,
      // [`${prefixCls}-two-chinese-chars`]: hasTwoCNChar && autoInsertSpace && !innerLoading,
      [`${prefixCls}-block`]: this.block,
      [`${prefixCls}-dangerous`]: !!this.danger,
      // [`${prefixCls}-rtl`]: this.direction === 'rtl',
      // [`${prefixCls}-disabled`]: linkButtonRestProps.href !== undefined && mergedDisabled,
    });
    console.log(classes);

    return (
      <Host>
        <button class={classes} type={this.htmlType} disabled={this.disabled}>
          <slot></slot>
        </button>
      </Host>
    );
  }
}
