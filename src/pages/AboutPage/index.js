import React from 'react';
import PropTypes from 'prop-types';

const AboutPage = ({ history }) => {
  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <p>About Page</p>
      <button onClick={handleClick}>Go to Home page</button>
    </div>
  )
}

AboutPage.propTypes = {
  history: PropTypes.object
}

export default AboutPage;
