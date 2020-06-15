import {MENU, ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_FROM_CART, SEARCH_ITEM, LOGIN, NEW_REGISTRATION, LOGOUT}  from './actionTypes'
import data from '../utils/data.json'

const initState = {
    productsArr: data,
    cartItems: []
  };


const reducer = (state = initState, { type, payload }) => {
    console.log(state.productsArr)
    return state
  };
  
  export default reducer;