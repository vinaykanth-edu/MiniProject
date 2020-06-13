import {MENU, ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_FROM_CART, SEARCH_ITEM, LOGIN, NEW_REGISTRATION, LOGOUT}  from './actionTypes'
import data from '../utils/data.json'

const initState = {
    productsArr: [...data],
    cartItems: []
  };


const reducer = (state = initState, { type, payload }) => {
    switch (type) {
      case ADD_TO_CART:
        const item = state.productsArr.find(item => item.id === payload);
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        };
      case REMOVE_FROM_CART:
        return { ...state };
      default:
        return state;
    }
  };
  
  export default reducer;