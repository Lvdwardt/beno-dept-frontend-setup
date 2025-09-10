import tseslint from 'typescript-eslint'
import json from '@eslint/json'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig(
  globalIgnores(['node_modules', 'build']),
  tseslint.configs.recommended,
  {
    files: ['**/*.tsx'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['preact*'],
              message:
                'We only use tsx for templating, therefore the use of preact is not allowed. Create a .class.ts file and use vanilla ts for logic',
            },
          ],
        },
      ],
      'no-restricted-syntax': [
        'error',
        {
          selector: 'JSXAttribute[name.name=/^on[A-Z]/]',
          message:
            'JavaScript-specific event handlers (onClick, onSubmit, etc.) are not allowed. Use vanilla JavaScript event listeners in .class.ts files instead.',
        },
      ],
    },
  },
  {
    files: ['**/*.json'],
    plugins: { json },
    language: 'json/json',
    extends: ['json/recommended'],
  },
)
