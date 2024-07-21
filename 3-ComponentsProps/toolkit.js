import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART")
const login = createAction("CREATE_SESSION")

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginReducer = createReducer({status: false}, (builder) => {
    builder.addCase(login, (state) => {
        state.status = true;
    })
}); 

const store = configureStore({
    reducer: {
        login : loginReducer,
        cart: cartReducer,
    }
})

const addItemsToCart = {
    type: "ADD_TO_CART",
    payload: {
        id: 1,
        qty: 5
    }
}

console.log(` STORE BEFORE CHANGE: `, store.getState());

const action2 = {
    type: "ADD_TO_CART",
    payload: {
        id: 2,
        qty: 21
    }
}

store.subscribe(() => {
    console.log("STORE CHANGE:", store.getState())
})

store.dispatch(addItemsToCart);
store.dispatch(action2);
store.dispatch(login())