import React, { useState } from 'react';
import Question from './components/question';

function App() {

  const [budget, saveBudget] = useState(0);

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        <Question saveBudget={saveBudget} />
      </div>
    </div>
  );
}

export default App;
