import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import States from './components/states/States';
import Example from './components/example/Example';

class P5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExampleView: true,
    };
    this.handleView = this.handleView.bind(this);
  }
  handleView() {
    this.setState((prevState) => ({
      showExampleView: !prevState.showExampleView,
    }));
  }

  render() {
    const { showExampleView } = this.state;
    return (
      <div>
        <HashRouter>
          <Route path="/states" component={States} />
          <Route path="/example" component={Example} />
          <Link to="/states">States</Link>
          <Link to="/example">Example</Link>
        </HashRouter>
      </div>
      
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
