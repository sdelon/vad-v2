import Client from '../utils/client'
import Prismic from '@prismicio/client'

async function getPosts() {
    const allPosts = await Client.query([Prismic.Predicates.at('document.type', 'page_evenement')], { pageSize : 100 })
    const postsURL = allPosts.results.reduce((newArr, currItem) => {
        let parentPage = currItem.data.page
        let post = `${import.meta.env.VITE_PUBLIC_BASE_PATH}/${parentPage}/${currItem.uid}`

        newArr.push(post)
        return newArr
    }, [])

    return postsURL
}

export async function get() {
    const date = new Date().toISOString().split('T')[0]

    const pages = Object.keys(import.meta.glob('/src/routes/**/!(_)*.svelte'))
    .filter(page => {
        const filters = ['[uid]', '_', 'private']
        return !filters.find(filter => page.includes(filter))
    })
    .map(page => {
        return page.replace('/src/routes', import.meta.env.VITE_PUBLIC_BASE_PATH).replace('/index.svelte', '').replace('.svelte', '')
    })

    const allSiteURL = [await getPosts(), pages]
    .flat()
    .reduce((newArr, currItem) => {
        let node = {
            loc: `${currItem}`,
			priority: '1.0',
			changefreq: 'weekly',
			date
        }
        newArr.push(node)
        return newArr
    }, [])
    

    
    const urlNodes = allSiteURL
    .map((page) => {
        return `
            <url>
                <loc>${page.loc}</loc>
                <priority>${page.priority}</priority>
                <changefreq>${page.changefreq}</changefreq>
                <lastmod>${page.date}</lastmod>
            </url>
        `;
    })
    .join('\n');


    const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
    ${urlNodes}
    </urlset>`;
    
    return {
        // body: generate(pages),
        body: xml,
        headers: {
            'Content-Type': 'application/xml'
        }
    }
}