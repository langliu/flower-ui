import { newE2EPage } from '@stencil/core/testing';

describe('flower-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flower-input></flower-input>');

    const element = await page.find('flower-input');
    expect(element).toHaveClass('hydrated');
  });
});
