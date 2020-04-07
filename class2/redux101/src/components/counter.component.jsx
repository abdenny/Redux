import React, { Component } from 'react';
import { connect } from 'react-redux';
import increaseAction from '../actions/increaseAction.component';
import decreaseAction from '../actions/decreaseAction.component';

//create counter component
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Hello',
    };
  }
  render() {
    return (
      //goal is to increment global state
      <>
        <h1>{this.state.title}</h1>
        <span>{this.props.count}</span>
        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    );
  }
}
let mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction()),
  };
};
//dispatch with functions we create (mapStateToProps, mapDispatchToProps)
//connect component to these map functions

const App = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default Counter;
