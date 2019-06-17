import React, { Fragment, useState } from 'react';

function Question() {

  // definir el state
  const [ quantity, saveQuantity ] = useState(0);
  const [ error, saveError ] = useState(false);

  const addedBudget = (e) => {
    e.preventDefault();

    if(quantity <= 0 || isNaN(quantity)){ //si no es un numero retornara como true
      saveError(true);
      return;
    }
  }

  return (
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>

      { error && <p className="alert alert-danger error">El presupuesto es incorrecto</p> }

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
