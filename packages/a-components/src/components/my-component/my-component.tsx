import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() num: number = 1;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  private add() {
    this.num += 1;
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.getText()}
        <button onClick={() => this.add()}>{this.num}</button>
      </div>
    );
  }
}
