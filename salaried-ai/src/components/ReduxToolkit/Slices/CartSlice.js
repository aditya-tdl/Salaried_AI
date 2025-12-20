import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderDetails: {},
  cartItems: [],
  cart: [
    {
      productId: {
        _id: "",
        name: "",
        price: 0,
        image: [
          {
            name: "",
            public_id: "",
            url: "",
            fileType: "",
          },
        ],
      },
      quantity: 0,
      price: 0,
      total: 0,
    },
  ],
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addOrderDetails(state, action) {
      state.orderDetails = action.payload;
    },
    addCartItems(state, action) {
      state.cartItems = action.payload;
    },
    addSingleItem(state, action) {
      state.cartItems.push(action.payload);
    },
    clearCart(state, action) {
      state.cartItems = [];
    },
    clearOrderDetails(state, action) {
      state.orderDetails = {};
    },
  },
});

export const { addOrderDetails, addCartItems, clearCart, addSingleItem, clearOrderDetails } =
  cartSlice.actions;

export default cartSlice.reducer;
