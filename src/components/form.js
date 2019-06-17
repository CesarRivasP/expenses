import React, { useState } from 'react';
import Error from './error';

function Form(props){

  const [nameExpense, saveExpense] = useState('');
  const [quantityExpense, saveQuantityExpense] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    // validar
    if(quantityExpense <= 1 || isNaN(quantityExpense) || nameExpense === ''){
      saveError(true);
      return;
    }

    // pasar el gasto al componente principal
  }

  return(
    <form onSubmit={addExpense}>
      <h2>Agrega tus gastos aqui</h2>

      { error && <Error message="Ambos campos son obligatorios" />}

      <div className="expense">
        <label htmlFor="expense">Nombre de gasto</label>
        <input
          id="expense"
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          onChange={(e) => saveExpense(e.target.value)}
        />

        <label htmlFor="quantity">Cantidad de gasto</label>
        <input
          id="quantity"
          type="number"
          className="u-full-width"
          placeholder="Ej. 3000"
          onChange={(e) => saveQuantityExpense(Number(e.target.value))}
        />

        <input type="submit" value="Agregar gasto" className="u-full-width button-submit" />
      </div>
    </form>
  );
}

export default Form;
