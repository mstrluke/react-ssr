import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import NotFoundPage from '../pages/NotFoundPage';

export default [
  {
    title: 'Home',
    component: HomePage,
    path: '/',
    exact: true
  },
  {
    title: 'About',
    component: AboutPage,
    path: '/about',
    exact: true
  },
  {
    title: 'Not Found',
    component: NotFoundPage,
    exact: true
  }
];
