
import './App.css';
import React from 'react';
import {Navbar} from "../global/navbar";
class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
          <Navbar />
        </header>
        
        <footer>

        </footer>
      </div>
    );
  }
}

export default App;
