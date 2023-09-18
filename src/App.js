import { Component } from 'react';
import './App.css';
import Livre from './components/Livre';
import Bibliotheque from './components/Bibliotheque';

function App() {
  return (
    <div className="App">
      <Livre />
      <Bibliotheque />
    </div>
  );
}

export default App;
