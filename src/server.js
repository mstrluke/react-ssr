require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const { template } = require('./utils');
const express = require('express');
const path = require('path');
const { ChunkExtractor } = require('@loadable/server');


const PORT = process.env.APP_PORT || '3000';
const HOST = process.env.APP_HOST || '0.0.0.0';
const app = express();
const router = express.Router();

app.use(express.static(
  path.resolve(process.cwd(), './build'), { index: false })
);

app.use((req, res, next) => {
  if (req.path.match(/server\.js/)) return res.status(404).end('Not Found');
  next();
})

const statsFile = path.resolve(process.cwd(), './build/loadable-stats.json')
const extractor = new ChunkExtractor({
  statsFile,
  entrypoints: ['app', 'vendors']
});

router.get('/*', async (req, res) => {
  const html = template(extractor, req, res);
  res.set('content-type', 'text/html')
  res.send(html);
});

app.get('/*', router);

app.listen(PORT, HOST, () => console.log(`Started on http://${HOST}:${PORT}`));
