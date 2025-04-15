import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lang: "en-US",
    title: "VitePress",
    description: "A VitePress Starter",
    srcDir: "docs",
    cleanUrls: true,
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        siteTitle: "VitePress",
        nav: [
            { text: "Home", link: "/" },
            { text: "Documentation", link: "/documentation" }
        ],
        search: {
            provider: "local"
        },
        sidebar: [
            {
                text: "Getting Started",
                items: [
                    { text: "Documentation", link: "/documentation" }
                ]
            }
        ],
        socialLinks: [
            { icon: "github", link: "https://github.com/syvixor/vitepress-starter" }
        ]
    }
});