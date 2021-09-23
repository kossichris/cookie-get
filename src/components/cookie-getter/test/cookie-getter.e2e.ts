import { newE2EPage } from '@stencil/core/testing';

describe('cookie-getter', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cookie-getter></cookie-getter>');

    const element = await page.find('cookie-getter');
    expect(element).toHaveClass('hydrated');
  });
});
