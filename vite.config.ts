import { defineConfig } from 'vite'
import vitePluginWasmPack from '@zebing/vite-plugin-wasm-pack';

console.log(vitePluginWasmPack);

export default defineConfig({
  plugins: [
    (vitePluginWasmPack as any).default({
      crateDirectory: './src/wasm',
    })
  ]
})
