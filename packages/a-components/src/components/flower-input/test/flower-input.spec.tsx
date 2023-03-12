import { newSpecPage } from '@stencil/core/testing';
import { FlowerInput } from '../flower-input';

describe('flower-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlowerInput],
      html: `<flower-input></flower-input>`,
    });
    expect(page.root).toEqualHtml(`
      <flower-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flower-input>
    `);
  });
});
