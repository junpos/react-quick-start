import React from 'react';
import { connect } from 'react-redux';
import { init } from '../actions';

class App extends React.Component {

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

App = connect(mapStateToProps, mapDispatchToProps)(App);

export default App;
