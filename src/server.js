require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const { template } = require('./utils');
const { ChunkExtractor } = require('@loadable/server');
const express = require('express');
const path = require('path');


const PORT = process.env.APP_PORT || '3000'
const app = express();
const router = express.Router();

app.use(express.static(
  path.resolve(process.cwd(), './build'), { index: false })
);

app.use((req, res, next) => {
  if (req.path.match(/server\.js/)) return res.status(404).end('Not Found');
  next();
})

router.get('/*', (req, res) => {
  const extractor = new ChunkExtractor({
    statsFile: path.resolve(process.cwd(), './build/loadable-stats.json'),
    entrypoints: ['app', 'vendors']
  });
  const html = template(extractor, req, res);

  res.set('content-type', 'text/html')
  res.send(html);
});

app.get('/*', router);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
