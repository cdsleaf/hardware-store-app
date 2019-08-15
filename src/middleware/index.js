import thunk from 'redux-thunk';
import logger from './logger';
import saveInSessionStorage from './saveInSessionStorage';
import { applyMiddleware } from 'redux';

export default applyMiddleware(
  thunk,
  logger,
  saveInSessionStorage,
)