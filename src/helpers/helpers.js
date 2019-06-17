export const reviewBudget = (budget, remaining) => {
  let classe;
  // comprobar el 25%
  if((budget / 4) > remaining){
    classe = 'alert alert-danger';
  }
  // comprobar el 50%
  else if((budget / 2) > remaining){
    classe = 'alert alert-warning';
  }
  else {
    classe = 'alert alert-success';
  }
  return classe;
}
