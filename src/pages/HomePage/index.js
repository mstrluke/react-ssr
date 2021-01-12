import React from 'react';
import PropTypes from 'prop-types';

const HomePage = ({ history }) => {
  const handleClick = () => {
    history.push('/about')
  }

  return (
    <div>
      <p>Home Page</p>
      <button onClick={handleClick}>Go to About page</button>
    </div>
  )
}

HomePage.propTypes = {
  history: PropTypes.object
}

export default HomePage;
