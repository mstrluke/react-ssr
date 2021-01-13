import loadable from "@loadable/component";

const HomePage = loadable(() => import('../pages/HomePage'))
const AboutPage = loadable(() => import('../pages/AboutPage'))
const NotFoundPage = loadable(() => import('../pages/NotFoundPage'))


export default [
  {
    title: 'Home',
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    title: 'About',
    exact: true,
    path: '/about',
    component: AboutPage,
  },
  {
    title: 'Not Found',
    exact: true,
    component: NotFoundPage,
  }
];
