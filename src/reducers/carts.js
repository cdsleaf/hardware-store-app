import { 
  ADD_CARTS,
  REMOVE_CARTS,
} from './../actions/carts'

export default function carts (state={}, action) {
  switch(action.type){
    case ADD_CARTS:
      return {
        ...state,
        [action.product.name]: {
          ...action.product,
          quantity: state.hasOwnProperty(action.product.name) 
            ? state[action.product.name]['quantity'] + 1 
            : 1,
        }
      };
    case REMOVE_CARTS:
      return state[action.product.name]['quantity'] === 1
        ? state.filter(product => product.name !== action.product.name) 
        : {
          ...state,
          [action.product.name]: {
            ...state[action.product.name],
            quantity: state[action.product.name]['quantity'] + 1,
          }
        }
    default:
      return state;
  }
}