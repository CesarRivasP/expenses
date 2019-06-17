import React from 'react';

const Expense = ({expense, index, deleteExpenses}) => {
  return (
    <li className="gastos">
      <p>
        <span className="expense-title"><strong>{ expense.nameExpense }</strong></span>
        <span className="gasto">$ {expense.quantityExpense}</span>

        <input type="button" value="X" className="button-style" onClick={() => deleteExpenses(index, expense.quantityExpense)} />
      </p>
    </li>
  );
}



export default Expense;
