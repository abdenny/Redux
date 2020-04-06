import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    console.log('COmponent will mount');
  }
  componentDidMount() {
    console.log('COmponent did mount');
  }

  render() {
    console.log('Rendered COmponent');
    return <>Lifecycle methods</>;
  }
}

export default App;
