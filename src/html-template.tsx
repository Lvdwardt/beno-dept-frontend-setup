import site from './data/site'
import { Environment } from './generic/environment'
import { Favicons } from './generic/favicons'
import { GTMScript, GTMNoscript } from './generic/gtm'
import { Preloads } from './generic/preloads'

export interface TemplateData {
  page: string
  html: string
  availablePages: string[]
  isDevelopment?: boolean
}

export default function HtmlTemplate({
  page,
  html,
  availablePages,
  isDevelopment = false,
}: TemplateData) {
  const stylesPath = isDevelopment ? '/src/assets/styles.css' : 'assets/styles.css'
  const jsPath = isDevelopment ? '/src/assets/main.ts' : 'assets/main.js'

  return (
    <html lang={site.language} dir={site.direction}>
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="disabled-adaptations" content="watch" />

        <meta property="og:url" content={site.url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:image" content={site.image} />

        <title>{site.title}</title>

        <link rel="stylesheet" href={stylesPath} />

        <Favicons />
        <Preloads />
        <Environment />
        <GTMScript />
      </head>
      <body>
        <GTMNoscript />
        {page === 'index' && (
          <div className="main-grid pt-4">
            <div className="content-section flex flex-col">
              <span>Auto generated pages list</span>
              {availablePages.map(page => (
                <a key={page} href={`/${page}.html`} className="text-tahiti-700">
                  {page}
                </a>
              ))}
            </div>
          </div>
        )}
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <script type="module" src={jsPath} />
        {/* Vite client, enable HMR - only in development */}
        {isDevelopment && <script type="module" src="/@vite/client" />}
      </body>
    </html>
  )
}
