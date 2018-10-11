import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SayHelloWordComponent, {TextComponent} from './component/sayHelloWord.js';
import Family from './component/family';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            <SayHelloWordComponent Value="Hello Word!"/>
           
            Testando o imput text:

             <TextComponent name="txtName" value="Default Value"/>


             Testando componentes dentro de componentes:

             <Family />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
