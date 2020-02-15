import React from 'react';
import Team from './components/Team'
import Reset from './components/ui/Reset';
import './App.css';


function App() {
  const teams = ['blue', 'red', 'green']
  const renderTeams = () => (
    teams.map(teamName => <Team key={teamName} name={teamName} />)
  )
  return (
    <div className="app">
      <Reset />
      {renderTeams()}
    </div>
  );
}


export default App;
