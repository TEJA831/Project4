import React from 'react';
import ReactDOM from 'react-dom';
import States from './components/states/States';
import Example from './components/example/Example';

class SwitchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showExampleView: true,
    };
    this.handleView = this.handleView.bind(this);
  }

  handleView() {
   this.setState({showExampleView: !this.state.showExampleView});
  }

  render() {
    var {showExampleView} = this.state;
    return (
      <div>
        <button onClick={this.handleView}>Switch to {showExampleView ? 'States' : 'Example'}</button>
        {showExampleView ? <Example /> : <States />}
      </div>
    );
  }
}

ReactDOM.render(<SwitchView />, document.getElementById('reactapp'));
