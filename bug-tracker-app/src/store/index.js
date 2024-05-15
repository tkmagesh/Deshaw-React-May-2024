import { combineReducers, legacy_createStore as createStore } from 'redux'
import bugsReducer from '../bugs/reducers/bugsReducer';
import projectsReducer from '../projects/reducer';

const rootReducer = combineReducers({
    bugsState : bugsReducer,
    projectsState : projectsReducer
});

const store = createStore(rootReducer);

export default store;