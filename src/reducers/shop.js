import phones from "../data/phones";
import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
} from "../actions";

const initialState = {
  products: phones,
  cart: [],
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;

  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );

      // Check if item in cart
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, quantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }

      return { ...state, cart: updatedCart };
      break;

    case INCREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );
      if (updatedItemIndex < 0) {
        return state;
      } else {
        const incrementedItem = { ...updatedCart[updatedItemIndex] };
        incrementedItem.quantity++;
        updatedCart[updatedItemIndex] = incrementedItem;

        return { ...state, cart: updatedCart };
      }
      break;

    case DECREMENT_CART_ITEM_QUANTITY:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );
      if (updatedItemIndex < 0) {
        return state;
      } else {
        const incrementedItem = { ...updatedCart[updatedItemIndex] };
        incrementedItem.quantity--;
        updatedCart[updatedItemIndex] = incrementedItem;

        return { ...state, cart: updatedCart };
      }
      break;

    case REMOVE_PRODUCT_FROM_CART:
      updatedCart = [...state.cart];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );
      if (updatedItemIndex < 0) {
        return state;
      } else {
        updatedCart.splice(updatedItemIndex, 1);
        return { ...state, cart: updatedCart };
      }

    default:
      return state;
      break;
  }
};

export default shopReducer;
