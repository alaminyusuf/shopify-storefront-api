/* eslint-disable no-case-declarations */
import {
  ADD_CHECKOUT,
  ADD_PROD,
  CREATE_CHECKOUT,
  GET_CLIENT,
  GET_PROD,
  SET_LOADING,
} from './Types'

export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT:
      const { products, shop } = action.payload
      return {
        ...state,
        products,
        shop,
        loading: false,
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      }
    case GET_PROD:
      return {
        ...state,
        product: action.payload.prod,
        prodImg: action.payload.image,
        loading: false,
      }
    case ADD_PROD:
      const { cart } = action.payload
      return {
        ...state,
        cart,
      }
    case CREATE_CHECKOUT:
      return {
        ...state,
        cartIns: action.payload,
      }
    default:
      return state
  }
}
