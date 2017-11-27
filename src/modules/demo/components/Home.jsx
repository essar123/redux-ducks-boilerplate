import React from 'react';
import style from '../../../App.css';
import SubComp from './SubComp';
import PropTypes from 'prop-types';

const Home = (props) => {
  return (
    <div className="home">
      <h1>{`Welcome to ${props.name}`}</h1>
      <SubComp/>
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
