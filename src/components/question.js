import React, { Fragment } from 'react';

function Question() {
  return (
    <Fragment>
      <h2>Ingresa tu presupuesto</h2>
      <form>
        <input
          type="number"
          className="u-full-width"
          placeholder="Agrega tu presupuesto"
          // onChange={}
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
