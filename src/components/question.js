import React, { Fragment, useState } from 'react';
import Error from './error';

function Question(props) {

  const { saveBudget, saveQuestionBudget, saveRemaining } = props;

  // definir el state
  const [ quantity, saveQuantity ] = useState(0);
  const [ error, saveError ] = useState(false);

  const addedBudget = (e) => {
    e.preventDefault();

    if(quantity <= 0 || isNaN(quantity)){ //si no es un numero retornara como true
      saveError(true);
      return;
    }

    // Si se pasa la validacion
    saveBudget(quantity);
    saveRemaining(quantity);
    saveError(false);
    saveQuestionBudget(false);
  }

  return (
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>

      {/* { error && <p className="alert alert-danger error">El presupuesto es incorrecto</p> } */}
      { error && <Error message="El presupuesto es incorrecto" />}

      <form onSubmit={addedBudget}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          onChange={(e) => saveQuantity(Number(e.target.value))}
        />
        <input
          type="submit"
          className="u-full-width button-submit"
          value="definir presupuesto"
        />
      </form>
    </Fragment>
  );
}

export default Question;
