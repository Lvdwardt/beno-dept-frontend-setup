import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import fs from 'fs'
import { render } from 'preact-render-to-string'
import { importComponentStyles } from './component-css-importer'
import HtmlTemplate from '../src/html-template'

export function staticSiteGenerator() {
  const projectRoot = fileURLToPath(new URL('..', import.meta.url))

  return {
    name: 'static-site-generator',
    buildStart() {
      importComponentStyles(projectRoot)
    },
    async generateBundle() {
      // Generate HTML pages

      const pagesDir = resolve(projectRoot, 'src/pages')
      const pages = fs
        .readdirSync(pagesDir)
        .filter(file => file.endsWith('.tsx'))
        .map(file => file.replace('.tsx', ''))

      const pageGenerationPromises = pages.map(async page => {
        try {
          const module = await import(`../src/pages/${page}.tsx`)
          const PageComponent = module.default

          if (typeof PageComponent !== 'function') {
            console.warn(`Page ${page} does not export a default function component`)
            return null
          }

          const html =
            '<!DOCTYPE html>' +
            render(
              HtmlTemplate({
                page,
                html: render(PageComponent()),
                availablePages: pages.filter(page => page !== 'index'),
                isDevelopment: false,
              }),
            )

          this.emitFile({
            type: 'asset',
            fileName: `${page}.html`,
            source: html,
          })

          console.log(`Generated ${page}.html`)
          return page
        } catch (error) {
          console.error(`Error generating ${page}.html:`, error)
          return null
        }
      })

      const results = await Promise.all(pageGenerationPromises)
      const successfulPages = results.filter(Boolean)

      console.log(`Successfully generated ${successfulPages.length}/${pages.length} pages`)

      // Copy assets folders from src/assets to build output
      const assetsDir = resolve(projectRoot, 'src/assets')
      const buildDir = resolve(projectRoot, 'build')

      const assetItems = fs.readdirSync(assetsDir)
      const assetDirectories = assetItems.filter(item => {
        const itemPath = resolve(assetsDir, item)
        return fs.statSync(itemPath).isDirectory()
      })

      const assetCopyPromises = assetDirectories.map(async folder => {
        try {
          const sourcePath = resolve(assetsDir, folder)
          const targetPath = resolve(buildDir, folder)
          fs.cpSync(sourcePath, targetPath, { recursive: true })
          console.log(`Copied assets folder: ${folder}`)
          return folder
        } catch (error) {
          console.error(`Error copying assets folder ${folder}:`, error)
          return null
        }
      })

      const assetResults = await Promise.all(assetCopyPromises)
      const successfulAssets = assetResults.filter(Boolean)
      console.log(
        `Successfully copied ${successfulAssets.length}/${assetDirectories.length} asset folders`,
      )
    },
  }
}
