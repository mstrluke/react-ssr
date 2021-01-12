import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';

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
  }
];
