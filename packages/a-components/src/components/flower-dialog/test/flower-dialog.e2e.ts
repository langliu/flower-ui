import { newE2EPage } from '@stencil/core/testing';

describe('flower-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flower-dialog></flower-dialog>');

    const element = await page.find('flower-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
