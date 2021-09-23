import { newSpecPage } from '@stencil/core/testing';
import { CookieGetter } from '../cookie-getter';

describe('cookie-getter', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CookieGetter],
      html: `<cookie-getter></cookie-getter>`,
    });
    expect(page.root).toEqualHtml(`
      <cookie-getter>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cookie-getter>
    `);
  });
});
