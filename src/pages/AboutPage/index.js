import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './index.scss'

const AboutPage = ({ history }) => {
  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <Helmet>
        <title>About page | React SSR</title>
        <meta name="description" content="About page" />
      </Helmet>
      <p className="text">About Page</p>
      <button onClick={handleClick}>Go to Home page</button>
    </div>
  )
}

AboutPage.propTypes = {
  history: PropTypes.object
}

export default AboutPage;
