import phones from "../data/phones";
import {
  ADD_PRODUCT_TO_CART,
  INCREMENT_CART_ITEM_QUANTITY,
  DECREMENT_CART_ITEM_QUANTITY,
  REMOVE_PRODUCT_FROM_CART,
  ADD_BRAND_TO_FILTER,
  REMOVE_BRAND_FROM_FILTER,
  PREV_PAGE,
  NEXT_PAGE,
  GO_PAGE,
  COUNT_ITEM,
} from "../actions";

const initialState = {
  products: phones,
  cart: [],
  brand: "",
  pagination: {
    perPage: 12,
    currentPage: 1,
    pagesToShow: 3,
    totalItemsCount: 0,
  },
};

const shopReducer = (state = initialState, action) => {
  let updatedCart;
  let updatedItemIndex;
  let updatedBrand;

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

    case ADD_BRAND_TO_FILTER:
      if (state.brand.includes(action.brand)) return state;
      updatedBrand = state.brand + action.brand;
      return { ...state, brand: updatedBrand };
      break;

    case REMOVE_BRAND_FROM_FILTER:
      console.log("remove brand", action);
      const reg = new RegExp(action.brand, "gi");
      updatedBrand = state.brand.replace(reg, "");
      return { ...state, brand: updatedBrand };
      break;
    case PREV_PAGE:
      if (state.currentPage === 1) return state;

      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.currentPage - 1,
        },
      };
    case NEXT_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: state.currentPage + 1,
        },
      };
    case GO_PAGE:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: action.currentPage,
        },
      };
    case COUNT_ITEM:
      return {
        ...state,
        pagination: {
          ...state.pagination,
          totalItemsCount: action.totalItemsCount,
        },
      };

    default:
      return state;
      break;
  }
};

export default shopReducer;
