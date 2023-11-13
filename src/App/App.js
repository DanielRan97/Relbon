import React from 'react';
import '../App/App.css';
import ProteinCalculator from '../components/proteinCalculator/proteinCalculator';
import Nav from '../components/nav/nav';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>

      <main>
        <ProteinCalculator />
      </main>

    </React.Fragment>
  );
}

export default App;
