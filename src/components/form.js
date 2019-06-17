import React, { useState } from 'react';
import shortid from 'shortid'; //shortid genera id, pero mas cortos que los de uuid
import Error from './error';

function Form(props){

  const [nameExpense, saveNameExpense] = useState('');
  const [quantityExpense, saveQuantityExpense] = useState(0);
  const [error, saveError] = useState(false);

  const addExpense = (e) => {
    e.preventDefault();

    // validar
    if(quantityExpense <= 1 || isNaN(quantityExpense) || nameExpense === ''){
      saveError(true);
      return;
    }

    // construir objeto de gasto
    const expense = {
      id: shortid.generate(),
      nameExpense,
      quantityExpense
    };

    // pasar el gasto al componente principal
    props.saveExpense(expense);
    saveError(false);

    // Resetear el formulario
    saveNameExpense('');
    saveQuantityExpense('');
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
          onChange={(e) => saveNameExpense(e.target.value)}
          value={nameExpense}
        />

        <label htmlFor="quantity">Cantidad de gasto</label>
        <input
          id="quantity"
          type="number"
          className="u-full-width"
          placeholder="Ej. 3000"
          onChange={(e) => saveQuantityExpense(Number(e.target.value))}
          value={quantityExpense}
        />

        <input type="submit" value="Agregar gasto" className="u-full-width button-submit" />
      </div>
    </form>
  );
}

export default Form;
