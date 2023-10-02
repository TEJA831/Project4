import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import States from './components/states/States';
import Example from './components/example/Example';
import Header from './components/header/Header';
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
      <HashRouter> 
        <Header />
        <div>
          <Link to="/states">States</Link>
          <br />
          <Link to="/example">Example</Link>
          <Route path="/states" component={States} />
          <Route path="/example" component={Example} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
