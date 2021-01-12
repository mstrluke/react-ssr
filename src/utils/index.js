export { default as template } from './template';

export const renderAssets = (files = {}) => {
  const css = [files['main.css']]
    .filter(asset => Boolean(asset))
    .map(url => `<link rel="stylesheet" href="${url}" async />`)
    .join('')
  const scripts = [
    files['runtime.js'],
    files['vendors.js'],
    files['app.js'],
  ]
    .filter(asset => Boolean(asset))
    .map(url => `<script src="${url}" defer></script>`)
    .join('')
  
  return { css, scripts }
}
