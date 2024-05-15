import {combineReducers, legacy_createStore as createStore } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';
import errorsReducer from '../errors/errorsReducer';
import rootMiddleware from './middlewares';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer,
    errorsState : errorsReducer
});


const store = createStore(rootReducer, rootMiddleware); 

export default store;