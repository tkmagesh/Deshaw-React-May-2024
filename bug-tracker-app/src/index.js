import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

// using 'react-redux'
import { Provider } from 'react-redux'
import store from "./store";
import Bugs from "./bugs";
import Projects from './projects';

import axios from 'axios';
window['axios'] = axios;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <div className="container">
      <div className="container-child">
        <Bugs />
      </div>
      <div className="container-child">
        <Projects />
      </div>
    </div>
  </Provider>
);

// without using 'react-redux
/* 
import { bindActionCreators}  from 'redux';
import * as bugActionCreators from './bugs/actions';
import store from './store';
import Bugs from './bugs';

const bugActionDispatchers = bindActionCreators(
  bugActionCreators,
  store.dispatch
);

var root = ReactDOM.createRoot(document.getElementById("root"));

function renderApp() {
  const bugs = store.getState();
  root.render(<Bugs bugs={bugs} {...bugActionDispatchers} />);
}
renderApp();
store.subscribe(renderApp);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/* 
ES6 Modules
*/
/* 
import * as calc from './calculator';
console.log(calc); 
*/

/* 
import * as calc from "./calculator";

// console.log(calc.add(100,200))

// const add = calc.add;
// console.log(add(100,200))

const {add} = calc
console.log(add(100,200)) 
*/

/* 
import { add } from "./calculator";
console.log(add(100, 200));
*/

// importing default exports
/* 
import C from './calculator'
console.log(C) 
*/

