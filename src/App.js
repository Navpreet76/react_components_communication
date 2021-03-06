import React, { Component } from 'react';
import './App.css';
import Parent from './components/parentToChild/parent';

class App extends Component {

  state = {
    title: 'placeholder title'
  }

  changeTheWorld = (newTitle) => {
    this.setState({title:newTitle});
  }

  render() {
    return (
      
      <div className="App">
        <Parent changeTheWorldEvent={this.changeTheWorld.bind(this, 'New World Order')} 
        keepTheWorldSameEvent={this.changeTheWorld.bind(this, 'Same Old World')}
        title={this.state.title}/>
      </div>

    );
  }
}

export default App;
