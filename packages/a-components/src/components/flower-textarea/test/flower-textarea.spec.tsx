import { newSpecPage } from '@stencil/core/testing';
import { FlowerTextarea } from '../flower-textarea';

describe('flower-textarea', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlowerTextarea],
      html: `<flower-textarea></flower-textarea>`,
    });
    expect(page.root).toEqualHtml(`
      <flower-textarea>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flower-textarea>
    `);
  });
});
