import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { Helmet } from 'react-helmet'
import { StaticRouter } from 'react-router-dom';

import App from '../App';

const template = ({ css, scripts }, req, res) => {
  const reactApp = (
    <StaticRouter location={req.path} context={{ req, res }}>
      <App />
    </StaticRouter>
  );
  const renderedApp = ReactDOMServer.renderToString(reactApp);


  const helmet = Helmet.renderStatic();
  const html = `
    <!DOCTYPE html>
    <html lang="en" ${helmet.htmlAttributes.toString()}>
      <head>
      <meta charset="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Minimal SSR React App" />
      <meta name="theme-color" content="#000000" />
      <title>Minimal SSR React App</title>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
        ${css}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root">${renderedApp}</div>
        ${scripts}
      </body>
    </html>`;

  return html;
};

export default template;
