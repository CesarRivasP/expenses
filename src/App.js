import React, { useState, useEffect } from 'react';
import Question from './components/question';
import Form from './components/form';
import List from './components/list';
import ControlBudget from './components/budget-control.js';

function App() {

  const [budget, saveBudget] = useState(0);
  const [ questionBudget, saveQuestionBudget] = useState(true)
  const [createExpense, saveCreateExpense] = useState(false);
  const [expense, saveExpense] = useState({});
  const [expenses, saveExpenses] = useState([]);
  const [remaining, saveRemaining] = useState(0);

  useEffect(() => {
    if(createExpense){
      //copia del state
      const expensesList = [...expenses, expense];
      saveExpenses(expensesList);

      // restar al presupuesto
      const budgetRemaining = remaining - expense.quantityExpense;
      saveRemaining(budgetRemaining);

      // una vez que se agrega, hay que cambiarlo a false nuevamente
      saveCreateExpense(false);
    }
  }, [createExpense, expenses, expense, remaining])

  const deleteExpenses = (index, quantityRemaining) => {
    const newExpenses = [...expenses];
    newExpenses.splice(index, 1);
    saveExpenses(newExpenses);

    const budgetRemaining = remaining + quantityRemaining;
    saveRemaining(budgetRemaining);
  }

  return (
    <div className="App container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">
        {
          questionBudget ?
            <Question /* Para que despliegue al inicio */
              saveBudget={saveBudget}
              saveQuestionBudget={saveQuestionBudget}
              saveRemaining={saveRemaining}
            />
            :
            <div className="row">
              <div className="one-half column">
                <Form saveExpense={saveExpense} saveCreateExpense={saveCreateExpense} />
              </div>
              <div className="one-half column">
                <List expenses={expenses} deleteExpenses={deleteExpenses} />
                <ControlBudget budget={budget} remaining={remaining} />
              </div>
            </div>
        }
      </div>
    </div>
  );
}

export default App;
