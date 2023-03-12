import { newSpecPage } from '@stencil/core/testing';
import { FlowerButton } from '../flower-button';

describe('flower-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlowerButton],
      html: `<flower-button></flower-button>`,
    });
    expect(page.root).toEqualHtml(`
      <flower-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flower-button>
    `);
  });
});
