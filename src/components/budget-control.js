import React, { Fragment } from 'react';
import { reviewBudget } from '../helpers/helpers';

const ControlBudget = ({budget, remaining}) => (
  <Fragment>
    <div className="alert alert-primary">
      <strong>Presupuesto: $ { budget }</strong>
    </div>
    <div className={reviewBudget(budget, remaining)}>
      <strong>Restante: $ { remaining }</strong>
    </div>
  </Fragment>
);


export default ControlBudget;
