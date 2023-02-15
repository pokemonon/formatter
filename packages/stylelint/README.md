## 环境
使用vscode搭配stylelint扩展。应用市场搜索 daosro.stylelint，或者通过命令安装
```sh
code --install-extension daosro.stylelint
```

### 编辑器设置

`<rootPath>/.vscode/settings.json`

```json
{
  "editor.formatOnSave": false,
  // stylelint配置
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": [
    "css",
    "less",
    "scss",
    "vue"
  ],
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true
  }
}
```

## 安装
```sh
yarn add -D @pokemonon/stylelint-config-formatter
```

## 配置
```js
module.exports = {
  extends: '@pokemonon/stylelint-config-formatter',
}
```