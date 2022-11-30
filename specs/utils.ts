import { JSDOM } from 'jsdom'

export function getDom(html: string) {
  return new JSDOM(html).window.document
}
