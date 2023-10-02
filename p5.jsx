import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route, Link } from "react-router-dom";
import States from './components/states/States';
import Example from './components/example/Example';
import './p5.css';

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
        <div>
          <div className="toolbar"><Link to="/states" className="toolbar-link">States</Link></div>
          <br />
          <div className="toolbar"><Link to="/example" className="toolbar-link">Example</Link></div>
          <Route path="/states" component={States} />
          <Route path="/example" component={Example} />
        </div>
      </HashRouter>
    );
  }
}

ReactDOM.render(<P5 />, document.getElementById('reactapp'));
