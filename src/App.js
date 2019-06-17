import React, { useState, useEffect } from 'react';
import Question from './components/question';
import Form from './components/form';
import List from './components/list';

function App() {

  const [budget, saveBudget] = useState(0);
  const [ questionBudget, saveQuestionBudget] = useState(true)
  const [createExpense, saveCreateExpense] = useState(false);
  const [expense, saveExpense] = useState({});
  const [expenses, saveExpenses] = useState([]);

  useEffect(() => {
    if(createExpense){
      //copia del state
      const expensesList = [...expenses, expense];
      saveExpenses(expensesList);

      // una vez que se agrega, hay que cambiarlo a false nuevamente
      saveCreateExpense(false);
    }
  }, [createExpense])


  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {
          questionBudget ?
            <Question saveBudget={saveBudget} saveQuestionBudget={saveQuestionBudget} /> /* Para que despliegue al inicio */
            :
            <div className="row">
              <div className="one-half column">
                <Form saveExpense={saveExpense} saveCreateExpense={saveCreateExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} />
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
