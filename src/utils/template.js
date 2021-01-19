import React from 'react';
import { Helmet } from 'react-helmet'
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../App';

const template = (extractor, req, res) => {
  const jsxApp = extractor.collectChunks(
    <StaticRouter location={req.path} context={{ req, res }}>
      <App />
    </StaticRouter>
  );
  const renderedApp = renderToString(jsxApp);
  const helmet = Helmet.renderStatic();
  const linkTags = extractor.getLinkTags();
  const styleTags = extractor.getStyleTags();
  const scriptTags = extractor.getScriptTags();

  const html = `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
      <meta charset="utf-8" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.webmanifest" />

        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${linkTags}
        ${styleTags}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${renderedApp}</div>
        ${scriptTags}
        ${helmet.script.toString()}
      </body>
    </html>`;

  return html;
};

export default template;
