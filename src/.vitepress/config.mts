import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'sporna.dev',
    titleTemplate: "Beyond the Cloud",

    themeConfig: {
        nav: [
            {
                text: 'O mnie',
                link: '/index',
                activeMatch: '/index',
            },
            {
                text: 'DevOps',
                link: '/ops',
                activeMatch: '/ops',
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
        footer: {
            message: 'Proudly created with <a href="https://vitepress.dev/">VitePress</a>',
            copyright: 'Copyright © 2020-present Jakub Spórna'
        },
        logo: {
            light: "/static/logo/logo.png",
            dark: "/static/logo/logo-negative.png"
        },
        editLink: {
            pattern: 'https://github.com/jsporna/sporna-dev/edit/main/src/:path'
        }
    },
    head: [
        ['link', { rel: "icon", type: "image/png", sizes: "64x64", href: "/static/logo/logo-64.png"}],
        ['link', { rel: "icon", type: "image/png", sizes: "128x128", href: "/static/logo/logo-128.png"}],
        ['link', { rel: "shortcut icon", href: "/static/logo/logo-64.png"}],
    ],
    lastUpdated: false,
    useWebFonts: true,
    appearance: 'dark',
    cleanUrls: true,
})