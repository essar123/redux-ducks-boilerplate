import {connect} from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import Home from '../components/Home';
import {actions as demoActions} from '../ducks/demo';

const mapStateToProps = (state, ownProps) => {
  const {demo} = state;
  return {
    name: demo.name,
    ...demo.status.fetchName
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchName: () => {
      dispatch(demoActions.fetchName());
    }
  }
}

class HomeClass extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return <Home {...this.props} />
  }

  componentDidMount() {
    this.props.fetchName();
  }
}

HomeClass.propTypes = {
  fetchName: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeClass);
