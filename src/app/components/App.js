import React, { Component } from 'react';
import { connect } from 'react-redux';
import { init } from '../actions';

class AppComponent extends Component {

  componentWillMount() {
    this.props.onMount();
  }

  render() {
    return (
      <h1>{this.props.value}</h1>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onMount: () => dispatch(init())
  };
};

const mapStateToProps = (state) => {
  return {
    value: state.app.value
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default App;
