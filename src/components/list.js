import React from 'react';
import Expense from './expense';

function List({expenses, deleteExpenses}){
  return(
    <div className="gastos-realizados">
      <h2>Listado</h2>
      {
        expenses.map((expense, index) => (
          <Expense key={expense.id} expense={expense} index={index} deleteExpenses={deleteExpenses} />
        ))
      }
    </div>
  );
}

export default List;
