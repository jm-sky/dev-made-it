import { createApp } from 'vue'
import type { OnRenderClientSync } from 'vike/types'

const onRenderClient: OnRenderClientSync = (pageContext) => {
  const { Page } = pageContext
  const app = createApp(Page)
  app.mount('#app')
}

export { onRenderClient }