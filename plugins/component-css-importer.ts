import { resolve } from 'path'
import fs from 'fs'

let processed = false

/**
 * Automatically imports component CSS files into the main styles file
 * Only processes once per application lifecycle to avoid duplicate calls
 * @param projectRoot The root directory of the project
 * @returns Array of CSS import statements that were added
 */
export function importComponentStyles(projectRoot: string): string[] {
  if (processed) {
    return []
  }
  return []

  const stylesFilePath = 'src/assets/styles.css'
  const componentsPath = 'src/components'

  const cssFiles = fs.globSync(`${componentsPath}/**/*.css`)

  const stylesFile = fs.readFileSync(resolve(projectRoot, stylesFilePath), 'utf8')

  const alreadyInFile = stylesFile.match(/@import "([^"]+)"/g) || []

  const cssFilesToImport = cssFiles
    .map(file => `../${file.replace('src/', '')}`)
    .filter(file => !alreadyInFile.some(imported => imported.includes(file)))

  // Add new CSS imports if any
  if (cssFilesToImport.length > 0) {
    const newImports = cssFilesToImport.map(file => `@import "${file}";`).join('\n')

    const updatedStyles =
      stylesFile + '\n\n/* Automatically added component styles */\n' + newImports

    // Write the updated styles file
    fs.writeFileSync(resolve(projectRoot, stylesFilePath), updatedStyles, 'utf8')
  }

  processed = true
  return cssFilesToImport
}
