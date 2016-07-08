const filter = store => next => action => {
  return next(action);
}

export default filter;
