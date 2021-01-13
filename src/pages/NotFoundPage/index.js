import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet'

const NotFound = ({ history }) => {
  const handleClick = () => {
    history.push('/')
  }

  return (
    <div>
      <Helmet>
        <title>404 Not Found Page | React SSR</title>
        <meta name="description" content="Not Found Page" />
      </Helmet>
      <p>404 Not Found Page</p>
      <button onClick={handleClick}>Go to Home page</button>
    </div>
  )
}

NotFound.propTypes = {
  history: PropTypes.object
}

export default NotFound;
