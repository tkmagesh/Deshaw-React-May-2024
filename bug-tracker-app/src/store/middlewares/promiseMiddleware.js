
import { setError, clearError } from "../../errors/actions";

const promiseMiddleware = (store) => (next) => (action) => {
  if (action instanceof Promise) {
    action
      .then((actionObj) => store.dispatch(actionObj))
      .catch((err) => {
        store.dispatch(setError(err.toString()));
        setTimeout(() => {
          store.dispatch(clearError());
        }, 5000);
      });
    return;
  }
  next(action);
};
export default promiseMiddleware;