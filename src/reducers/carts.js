import { 
  ADD_CARTS,
  REMOVE_CARTS,
  RESTORE_CARTS_FROM_STORAGE
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
      return state[action.productName]['quantity'] === 1
        ? Object.values(state)
                .reduce( (newProducts, product) => {
                   return product.name === action.productName
                    ? newProducts
                    : {
                      ...newProducts,
                      [product.name]: product,
                     } 
                  }, {}) 
        : {
          ...state,
          [action.productName]: {
            ...state[action.productName],
            quantity: state[action.productName]['quantity'] - 1,
          }
        }
    case RESTORE_CARTS_FROM_STORAGE:
      return action.carts;
    default:
      return state;
  }
}