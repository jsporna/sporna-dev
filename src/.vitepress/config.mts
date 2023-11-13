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
    lastUpdated: false,
    useWebFonts: true,
    appearance: 'dark'
})