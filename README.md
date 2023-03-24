# @andatoshiki/vitepress-plugin-nprogress

> Nprogress plugin for Vitepress

## Install
```sh
yarn add -D @andatoshiki/vitepress-plugin-nprogress
# npm install -D vitepress-plugin-nprogress
```

## Usage
```ts
// .vitepress/theme/index.ts

import DefaultTheme from "vitepress/theme"

import vitepressNprogress from '@andatoshiki/vitepress-plugin-nprogress'
import '@andatoshiki/vitepress-plugin-nprogress/lib/css/index.css'

export default {
  ...DefaultTheme,
  enhanceApp: (ctx) => {
    vitepressNprogress(ctx)
  }
}
```

## Tips
If got `TypeError [ERR_UNKNOWN_FILE_EXTENSION]: Unknown file extension ".css" for ***/node_modules/nprogress/nprogress.css` error when you build, 

you can config like this in your `vite.config.ts`:
```ts
// vite.config.ts
import {defineConfig} from 'vite'

export default defineConfig({
  ssr: {
    noExternal: ['@andatoshiki/vitepress-plugin-nprogress']
  },
})
```

Voila, then you can use `nprogress` ! 🎉