import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});


function logMiddleware(store){
    return function logMiddlewareNext(next){
        console.log("[@logMiddlewareNext] next:", next);
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



/* const logMiddleware = store => next => action => {
    console.group(action.type);
    console.log("Before :", store.getState());
    console.log("Action :", action);
    next(action);
    console.log("After :", store.getState());
    console.groupEnd();
} */

const rootMiddleware = applyMiddleware(logMiddleware)

const store = createStore(rootReducer, rootMiddleware); 


// const store = createStore(rootReducer); 

export default store;