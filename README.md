## 准备工作

使用`vscode`插件来配合进行更好的自动格式化:

1. eslint
2. vetur

```sh
code --install-extension dbaeumer.vscode-eslint
code --install-extension yoyo930021.vuter
```

或者在应用商店中搜索关键字手动安装

## 项目设置

- [eslint](packages/formatter-eslint/README.md)

## 编辑器设置

创建或者覆盖: `<rootPath>/.vscode/settings.json`

```json
{
  "editor.formatOnSave": false,

  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],

  // stylelint配置
  "stylelint.enable": true,
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": [

  ],

  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true, // 保存时自动修复eslint
    "source.fixAll.stylelint": true
  }
}
```
