import { newE2EPage } from '@stencil/core/testing';

describe('flower-textarea', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flower-textarea></flower-textarea>');

    const element = await page.find('flower-textarea');
    expect(element).toHaveClass('hydrated');
  });
});
