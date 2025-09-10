import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import HtmlTemplate from '../src/html-template'
import { importComponentStyles } from './component-css-importer'

// Plugin for development server to serve pages dynamically
export function devServerPlugin() {
  return {
    name: 'dev-server-plugin',
    configureServer(server) {
      server.middlewares.use('/', async (req, res, next) => {
        // Only handle root path and page routes, but skip Vite's internal routes
        if (
          (req.url === '/' || (req.url && req.url.endsWith('.html'))) &&
          !req.url?.startsWith('/@') &&
          !req.url?.startsWith('/node_modules') &&
          !req.url?.startsWith('/src/assets') &&
          !req.url?.includes('?') &&
          !req.url?.startsWith('/__vite')
        ) {
          try {
            // Handle component CSS imports
            const projectRoot = fileURLToPath(new URL('..', import.meta.url))
            importComponentStyles(projectRoot)

            const pagesDir = resolve(fileURLToPath(new URL('..', import.meta.url)), 'src/pages')

            // Determine which page to serve
            let pageName = 'index'
            if (req.url && req.url !== '/') {
              pageName = req.url.replace('/', '').replace('.html', '')
            }

            const pageFile = resolve(pagesDir, `${pageName}.tsx`)

            if (fs.existsSync(pageFile)) {
              // Import Preact render function
              const { render } = await import('preact-render-to-string')

              // Use Vite's module resolution for dynamic imports
              // This ensures new files are properly detected by Vite's dev server
              const modulePath = `/src/pages/${pageName}.tsx`
              const module = await server.ssrLoadModule(modulePath)
              const PageComponent = module.default

              const availablePages = fs
                .readdirSync(pagesDir)
                .filter(file => file.endsWith('.tsx') && file !== 'index.tsx')
                .map(file => file.replace('.tsx', ''))

              if (typeof PageComponent === 'function') {
                const html =
                  '<!DOCTYPE html>' +
                  render(
                    HtmlTemplate({
                      page: pageName,
                      html: render(PageComponent()),
                      availablePages,
                      isDevelopment: true,
                    }),
                  )

                res.setHeader('Content-Type', 'text/html')
                res.end(html)
                return
              }
            }
          } catch (error) {
            console.error(`Error serving page:`, error)
          }
        }
        next()
      })
    },
  }
}
