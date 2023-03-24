import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'

export default defineConfig({
  plugins: [vue()],
  build: {
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // pack the entry point
      name: 'vitepressPluginNprogress',
      formats: ['es', 'umd'],
      // fileName: () => 'index.js',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: '[ext]/[name].[ext]',
      }
      // output: {
      //   globals: {
      //     react: "React",
      //   },
      // },
    },
    outDir: "lib", // 打包后存放的目录文件
  }
})