import { applyMiddleware } from 'redux';

/* 
import logMiddleware from './logMiddleware'
import asyncMiddleware from './asyncMiddleware'
import promiseMiddleware from './promiseMiddleware'

const rootMiddleware = applyMiddleware(
  logMiddleware,
  asyncMiddleware,
  promiseMiddleware
); 
*/

import logger from "redux-logger";
import { thunk } from "redux-thunk";
import promiseMiddleware from "./promiseMiddleware";

const rootMiddleware = applyMiddleware(
  logger,
  thunk,
  promiseMiddleware
); 


export default rootMiddleware;