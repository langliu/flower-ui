import { newSpecPage } from '@stencil/core/testing';
import { FlowerAvatar } from '../flower-avatar';

describe('flower-avatar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlowerAvatar],
      html: `<flower-avatar></flower-avatar>`,
    });
    expect(page.root).toEqualHtml(`
      <flower-avatar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flower-avatar>
    `);
  });
});
