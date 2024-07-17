
import { legacy_createStore } from "redux";
// Reducer
const cartReducer = (
  state = {
    cart: [{id: 1, qty: 20}],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

// Store
const store = legacy_createStore(cartReducer)
console.log(`on create store :`, store.getState());

// Subscribe

store.subscribe(() => {
    console.log(`on subscribe :`, store.getState());
});

// Dispatch
const action1 = {
    type: "ADD_TO_CART",
    payload: { id: 2, qty: 10 },
}
const action2 = {
    type: "ADD_TO_CART",
    payload: { id: 3, qty: 54 },
}
store.dispatch(action1);
store.dispatch(action2);