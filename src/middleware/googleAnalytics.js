const gaMiddleware = store => next => action => {
  return next(action);
}

export default gaMiddleware;
