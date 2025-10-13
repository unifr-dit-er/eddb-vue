import MarkdownIt from 'markdown-it'

export default defineNuxtPlugin(() => {
  const md = new MarkdownIt({
    html: true,
    linkify: true,
    breaks: true
  })
  return {
    provide: {
      mdRenderer: md
    }
  }
})
