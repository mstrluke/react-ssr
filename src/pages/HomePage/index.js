import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './index.scss';
import './index.css';

const HomePage = ({ history }) => {
  const handleClick = () => {
    history.push('/about')
  }

  return (
    <div>
      <Helmet>
        <title>Home page | React SSR</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <p>Home Page</p>
      <button onClick={handleClick}>Go to About page</button>
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.object
}

export default HomePage;
