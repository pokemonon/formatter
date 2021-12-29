## 环境
使用vscode搭配eslint扩展。应用市场搜索 dbaeumer.vscode-eslint，或者通过命令安装
```sh
code --install-extension dbaeumer.vscode-eslint
```
### 编辑器设置
`<rootPath>/.vscode/settings.json`

```json
{
    "editor.formatOnSave": false,
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
    ],

    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true, // 保存时自动修复eslint
    },
}
```


## 安装
```sh
yarn add -D @pokemonon/eslint-config-formatter
```

## 配置

- [基础配置](#基础配置)
- [typescript配置](#typescript配置)
- [vue配置](#vue配置)

### 基础配置
javascript的基本规范
#### 依赖
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)


```js
module.exports = {
    root: true,
    extends: [
        '@pokemonon/formatter/common',
    ],
    settings: {
        'import/resolver': {
            // 如果需要配置别名
            alias: [
                ['@', `${__dirname}/src`],
            ],
        },
    },
};

```

### typescript配置
typescript的规范
#### 依赖
- [eslint-config-airbnb-typescript](https://www.npmjs.com/package/eslint-config-airbnb-typescript)
- [eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)


```js
module.exports = {
    root: true,
    extends: [
        '@pokemonon/formatter/common',
        '@pokemonon/formatter/typescript',
    ],
    parserOptions: {
        // @typescript-eslint/parse解析需要
        // 参考 https://www.npmjs.com/package/eslint-config-airbnb-typescript
        project: `${__dirname}/tsconfig.eslint.json`,
    },
    settings: {
        'import/resolver': {
            // https://www.npmjs.com/package/eslint-import-resolver-typescript
            // eslint-import-resolver-typescript
            // use paths defined in tsconfig.json
            typescript: {
                alwaysTryTypes: true,
                project: [
                    `${__dirname}/tsconfig.json`,
                ],
            },
        },
    },
};
```

### vue配置
vue的配置
#### 依赖
- [vue-eslint-parser](https://www.npmjs.com/package/vue-eslint-parser)

Vue3&ts
```js
module.exports = {
    'root': true,
    'extends': [
        '@pokemonon/formatter/common',
        '@pokemonon/formatter/typescript',
        '@pokemonon/formatter/vue3',
    ],
    parserOptions: {
        extraFileExtensions: ['.vue'],
        project: `${__dirname}/tsconfig.eslint.json`,
    },
    settings: {
        'import/resolver': {
            // https://www.npmjs.com/package/eslint-import-resolver-typescript
            // eslint-import-resolver-typescript
            // use paths defined in tsconfig.json....
            typescript: {
                alwaysTryTypes: true,
                project: [
                    `${__dirname}/tsconfig.json`,
                ],
            },
        },
    }
};
```

Vue2
```js
module.exports = {
    'root': true,
    'extends': [
        '@pokemonon/formatter/common',
        '@pokemonon/formatter/vue2', 
    ],
};
```