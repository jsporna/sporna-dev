import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'sporna.dev',

    themeConfig: {
        nav: [
            {
                text: 'O mnie',
                link: '/index',
                activeMatch: '/index',
            },
            {
                text: 'Kontakt',
                link: '/contact',
                activeMatch: '/contact',
            },
            {
                text: 'Oferta',
                link: '/offer',
                activeMatch: '/offer',
            },
            {
                text: 'Blog',
                link: '/blog',
                activeMatch: '/blog'
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/jsporna'},
            { icon: 'linkedin', link: 'https://www.linkedin.com/in/jsporna/'}
        ],
        outline: [2, 6],
    },
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "64x64", href: "./static/logo/logo-64.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "128x128", href: "./static/logo/logo-128.png"}],
        ['link', { rel: "shortcut icon", href: "./static/logo/logo-64.png"}],
    ],
    lastUpdated: false,
    useWebFonts: true,
    appearance: 'dark'
})