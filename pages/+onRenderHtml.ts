import { dangerouslySkipEscape, escapeInject } from 'vike/server'
import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import type { OnRenderHtmlAsync } from 'vike/types'

const onRenderHtml: OnRenderHtmlAsync = async (pageContext) => {
  const { Page } = pageContext
  const app = createSSRApp(Page)
  
  const appHtml = await renderToString(app)

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DEV Made IT</title>
      </head>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
    pageContext: {}
  }
}

export { onRenderHtml }
