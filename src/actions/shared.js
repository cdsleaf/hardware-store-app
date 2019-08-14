import { receiveProducts } from './product';
import { getProducts } from './../utils/api';

export function handleInitialData() {
  return dispatch => getProducts()
    .then(products => dispatch(receiveProducts(products)));
}