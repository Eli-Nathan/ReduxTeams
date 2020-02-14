import React from 'react';
import Blue from './components/Blue'
import Red from './components/Red'
import Reset from './components/ui/Reset';
import './App.css';


function App() {
  return (
    <div className="app">
      <Reset />
      <Blue />
      <Red />
    </div>
  );
}


export default App;
