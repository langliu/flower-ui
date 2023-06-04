import { newSpecPage } from '@stencil/core/testing';
import { FlowerDialog } from '../flower-dialog';

describe('flower-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [FlowerDialog],
      html: `<flower-dialog></flower-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <flower-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </flower-dialog>
    `);
  });
});
