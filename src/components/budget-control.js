import React, { Fragment } from 'react';

const ControlBudget = ({budget, remaining}) => (
  <Fragment>
    <div className="alert alert-primary">
      Presupuesto: $ {budget}
    </div>
    <div>
      Restante: { remaining }
    </div>
  </Fragment>
);


export default ControlBudget;
