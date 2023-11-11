import React from 'react';
import '../App/App.css';
import Calculator from '../components/body/calculatorForm/calculator';
import Nav from '../components/header/nav/nav';
import './App.css';

function App() {
  
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>

      <body>
        <Calculator />
      </body>
       
      
    </React.Fragment>
  );
}

export default App;
