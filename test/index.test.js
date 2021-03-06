import { resolve } from 'path';
import nuxt from 'nuxt';
import jsdom from 'jsdom';
import test from 'ava';

const { Nuxt, Builder } = nuxt;
const { JSDOM } = jsdom;


// Init Nuxt.js and create a server listening on localhost:4000
test.before(async ({ context }) => {
    const rootDir = process.cwd();
    const { default: fileConfig } = await import(resolve(rootDir, 'nuxt.config.cjs'));

    const config = {
        ...fileConfig,
        mode: 'universal'
    };

    context.server = new Nuxt(config);
    await new Builder(context.server).build();

    await context.server.listen(4000, 'localhost');
}, 30000);

test('Route / exits and render HTML', async ({ context, true: isTrue }) => {
    const { html } = await context.server.renderRoute('/', context)
    isTrue(html.includes('listen now'));
    isTrue(html.includes('contact us'));
});

test('Route / exits and render HTML with CSS applied', async ({ context, is, not }) => {
    const { html } = await context.server.renderRoute('/', context);
    const { window } = new JSDOM(html).window;

    const ctaHeader = window.document.querySelector('h1');
    not(ctaHeader, null);
    is(ctaHeader.textContent, 'listen now');

    const contactHeading = window.document.querySelector('.contact');
    not(contactHeading, null);
    is(contactHeading.textContent, 'contact us');
});

test.after('Closing server and nuxt.js', ({ context }) => {
    context.server.close();
});
