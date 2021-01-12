require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
});

const { renderAssets, template } = require('./utils');
const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.APP_PORT || '3000'

const assets = JSON.parse(
  fs.readFileSync(path.resolve(process.cwd(), './build/asset-manifest.json'))
);

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
  const files = renderAssets(assets)
  const html = template(files, req, res);
  
  res.send(html);
});

app.get('/*', router);

app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));
