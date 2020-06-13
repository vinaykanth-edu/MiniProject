import {MENU, ADD_TO_CART, INCREMENT, DECREMENT, REMOVE_FROM_CART, SEARCH_ITEM, LOGIN, NEW_REGISTRATION, LOGOUT}  from './actionTypes'

export const addToCart = payload => ({
    type: ADD_TO_CART,
    payload
  });
  
  export const removeFromCart = payload => ({
    type: REMOVE_FROM_CART,
    payload
  });

  export const increment = payload => ({
    type: INCREMENT,
    payload
  });
  
  export const decrement = payload => ({
    type: DECREMENT,
    payload
  });

  export const login = payload => ({
    type: LOGIN,
    payload
  });
  
  export const logout = payload => ({
    type: LOGOUT,
    payload
  });

  export const newRegistration = payload => ({
    type: NEW_REGISTRATION,
    payload
  });
  
  export const removeFromCart = payload => ({
    type: REMOVE_FROM_CART,
    payload
  });

  export const menu = payload => ({
    type: MENU,
    payload
  });
  

  export const searchItem = payload => ({
    type: SEARCH_ITEM,
    payload
  });
  