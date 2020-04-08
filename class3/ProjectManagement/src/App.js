import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return <>Hello World</>;
  }
}

let mapStateToProps = (state) => {
  return {
    projects: state.projects,
  };
};

export default connect(mapStateToProps, null)(App);
