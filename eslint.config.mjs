import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        ignores: ['node_modules', 'build'],
        files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        rules: {
            // Import order rules
            'import/order': [
                'error',
                {
                    groups: [
                        'builtin', // Node.js built-in modules
                        'external', // npm packages
                        'internal', // paths aliased to src/
                        ['parent', 'sibling'], // parent and sibling directories
                        'index', // index files
                        'object', // object imports
                        'type', // type imports
                    ],
                    'newlines-between': 'always',
                    alphabetize: {
                        order: 'asc',
                        caseInsensitive: true,
                    },
                },
            ],

            // TypeScript specific rules
            '@typescript-eslint/explicit-function-return-type': 'warn',
            '@typescript-eslint/no-explicit-any': 'error',
            '@typescript-eslint/no-unused-vars': 'error',
            '@typescript-eslint/no-non-null-assertion': 'warn',

            // General code style
            'no-console': 'warn',
            eqeqeq: 'error',
            'no-unused-vars': 'off',
            quotes: ['error', 'single'],
            semi: ['error', 'always'],

            // Code complexity
            'max-len': ['warn', { code: 100 }],
            complexity: ['warn', 10],
            'max-depth': ['warn', 4],

            // Best practices
            'no-var': 'error',
            'prefer-const': 'error',
            'no-multiple-empty-lines': ['error', { max: 1 }],
        },
    }
)
