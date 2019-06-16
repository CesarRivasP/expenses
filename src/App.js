import React from 'react';
import Question from './components/question';

function App() {
  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        <Question />
      </div>
    </div>
  );
}

export default App;
