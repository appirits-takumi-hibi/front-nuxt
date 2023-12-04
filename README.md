# front-nuxt

## 環境構築

環境
`Mac M2`
`Docker version 24.0.6, build ed223bc`
`Docker Compose version v2.21.0-desktop.1`

インストールされるversion
`node v20.10.0`, `npm 10.2.3`, `npx 10.2.3`

### ビルド・起動・停止

``` sh
make build
make up
make stop
```

## plugin

pinia
bootstrap5

[pinia](https://pinia.vuejs.org/ssr/nuxt.html#Auto-imports)
[piniaが入らない場合、npm install pinia --forceで入る](https://github.com/nuxt/nuxt/issues/14585#issuecomment-1397362344)
[bootstrap導入](https://zenn.dev/one_dock/articles/64bd100b83074b)`

## ディレクトリ構成

- /app
  - /assets
  - /components
  - /layouts
  - /pages
    - /xxx
    - /yyy

[参考記事](https://zenn.dev/melos/articles/44b645f44bc412)
