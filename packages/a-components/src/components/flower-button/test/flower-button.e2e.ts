import { newE2EPage } from '@stencil/core/testing';

describe('flower-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flower-button></flower-button>');

    const element = await page.find('flower-button');
    expect(element).toHaveClass('hydrated');
  });
});
