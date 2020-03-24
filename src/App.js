import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      monsters: [
        {
          name: 'Dracula',
          id: 'asc1' 
        },
        {
          name: 'Frankestein',
          id: 'r2d2'
        },
        {
          name: 'Zombie',
          id: 'c3po'
        },
      ]
    };

  }


  render() {
    return(
      <div className="App">
        {
          this.state.monsters.map( monster => (
            <h1 key={monster.id}>{ monster.name }</h1>
          ) )
        }
      </div>
    )
  }
}
export default App;
