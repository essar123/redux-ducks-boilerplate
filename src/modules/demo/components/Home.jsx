import React from 'react';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div>
      <h1>{`Welcome to ${props.name}`}</h1>
    </div>
  )
};

Home.defaultProps = {
  name: 'DEMO'
}

Home.propTypes = {
  name: PropTypes.string.isRequired
}

export default Home;
