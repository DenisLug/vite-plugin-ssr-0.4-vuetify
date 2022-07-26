import vue from '@vitejs/plugin-vue'
import ssr from 'vite-plugin-ssr/plugin'
import { UserConfig } from 'vite'
import vuetify from 'vite-plugin-vuetify'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr(),
    vuetify({
      styles: 'expose',
      autoImport: true
    })
  ],
}

export default config
