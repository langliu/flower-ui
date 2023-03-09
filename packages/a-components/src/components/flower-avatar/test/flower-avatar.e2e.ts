import { newE2EPage } from '@stencil/core/testing';

describe('flower-avatar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<flower-avatar></flower-avatar>');

    const element = await page.find('flower-avatar');
    expect(element).toHaveClass('hydrated');
  });
});
