## React Isomorphic (SSR, CSR)

This template is made for developers who are tired of finding a good quick start template.
The template is flexible to upgrade.
Use it as you want.

### Supported features

- Server Side Rendering
- Client Side Rendering
- Isomorphic Rendering
- Hot Module Replacement
- Webpack Dev Server
- Code splitting
- Components Lazy Loading
- Docker wrapper
- CSS and SCSS Support

### Todo features

- React Context API
- API config

### Installation

Clone and install the dependencies

```sh
$ git clone https://github.com/mstrluke/react-ssr.git
$ cd react-ssr
$ yarn install
```

### How to run via npm or yarn

Before start your are should copy envs from .env.dev to .env

Build source
```sh
$ yarn build or npm run build
```
Start development
```sh
$ yarn dev or npm run dev
```
Start production
```sh
$ yarn prod or npm run prod
```

### How to run via docker

```sh
$ docker build -f docker/Dockerfile -t react-ssr .
$ docker run -p 3000:3000 react-ssr
```
