import * as path from 'path'
import { defineConfig } from '@vitesite/vitedoc-core/node'

const resolve = (...paths: string[]) => path.resolve(__dirname, '..', ...paths)

export default defineConfig({
    title: 'VitePress',
    description: 'Vite & Vue powered static site generator.',
    resolve: {
        dirs: [
            { dir: 'docs' },
            { dir: 'packages' }
        ]
    },
    themeConfig: {
        sidebar: {
            '/': [
                {
                    text: '导读',
                    link: '/',
                },
                {
                    text: '开始',
                    children: [
                        {
                            text: 'eslint',
                            link: '/eslint/'
                        },
                        {
                            text: 'stylelint',
                            link: '/stylelint/'
                        }
                    ]
                }
            ]
        }
    }
})
