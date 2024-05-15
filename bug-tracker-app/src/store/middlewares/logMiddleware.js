

/* 
function logMiddleware(store){
    return function logMiddlewareNext(next){
        // console.log("[@logMiddlewareNext] next:", next);
        return function logMiddlewareAction(action){ // invoked everytime an action is dispatched
            console.group(action.type);
            console.log('Before :', store.getState());
            console.log('Action :', action);
            next(action);
            console.log("After :", store.getState());
            console.groupEnd()
        }
    }
}  
*/


const logMiddleware = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("Before :", store.getState());
  console.log("Action :", action);
  next(action);
  console.log("After :", store.getState());
  console.groupEnd();
};
export default logMiddleware;
