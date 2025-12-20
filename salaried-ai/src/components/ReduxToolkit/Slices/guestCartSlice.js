import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: {
    _id: "",
    appliedCoupon: {},
    items: [],
    totalPrice: 0,
    status: "active",
    createdAt: "",
    updatedAt: "",
    __v: 0,
  },
};

// Helper function to calculate total price
const calculateTotalPrice = (items) => {
  return items
    .reduce((acc, item) => acc + item.salePrice * item.quantity, 0)
    .toFixed(2);
};

// Slice for the guest cart
const guestCartSlice = createSlice({
  name: "guestCartItems",
  initialState,
  reducers: {
    // Action to add a product to the cart
    addGuestCart: (state, action) => {
      const newProduct = action.payload;

      // Check if the product is already in the cart
      const existingProductIndex = state.cart.items.findIndex(
        (item) => item.productId._id === newProduct._id
      );

      if (existingProductIndex >= 0) {
        // If product exists, increase its quantity
        state.cart.items[existingProductIndex].quantity += newProduct.quantity;
        state.cart.items[existingProductIndex].total =
          state.cart.items[existingProductIndex].productId.salePrice *
          state.cart.items[existingProductIndex].quantity;
      } else {
        // If product does not exist, add it to the cart
        const productToAdd = {
          productId: {
            _id: newProduct._id,
            name: newProduct.name,
            price: newProduct.price,
            salePrice: newProduct.salePrice,
            image: newProduct.image,
          },
          quantity: 1,
          salePrice: newProduct.salePrice,
          total: newProduct.salePrice * 1,
        };
        state.cart.items.push(productToAdd);
      }

      // Update total price
      state.cart.totalPrice = calculateTotalPrice(state.cart.items);

      // Update the updatedAt field with the current timestamp
      state.cart.updatedAt = new Date().toISOString();
    },
    // Action to increase quantity of a product
    increaseQuantity: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart.items.findIndex(
        (item) => item.productId._id === productId
      );

      if (productIndex >= 0) {
        state.cart.items[productIndex].quantity += 1;
        state.cart.items[productIndex].total =
          state.cart.items[productIndex].productId.salePrice *
          state.cart.items[productIndex].quantity;
        state.cart.totalPrice = calculateTotalPrice(state.cart.items);
        state.cart.updatedAt = new Date().toISOString();
      }
    },
    decreaseQuantity: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart.items.findIndex(
        (item) => item.productId._id === productId
      );

      if (productIndex >= 0) {
        if (state.cart.items[productIndex].quantity > 1) {
          state.cart.items[productIndex].quantity -= 1;
          state.cart.items[productIndex].total =
            state.cart.items[productIndex].productId.salePrice *
            state.cart.items[productIndex].quantity;
        } else {
          // Optionally remove the product if quantity is reduced to 0
          state.cart.items.splice(productIndex, 1);
        }

        state.cart.totalPrice = calculateTotalPrice(state.cart.items);
        state.cart.updatedAt = new Date().toISOString();
      }
    },
    deleteProductFromCart: (state, action) => {
      const productId = action.payload;
      const productIndex = state.cart.items.findIndex(
        (item) => item.productId._id === productId
      );
      state.cart.items.splice(productIndex, 1);
      state.cart.totalPrice = calculateTotalPrice(state.cart.items);
      state.cart.updatedAt = new Date().toISOString();
    },
    clearCart: (state, action) => {
      state.cart.items = [];
      state.cart.totalPrice = 0;
      state.cart.appliedCoupon = {};
    },
    syncCartData: (state, action) => {
      state.cart = action.payload;
    },
  },
});

export const {
  addGuestCart,
  increaseQuantity,
  decreaseQuantity,
  deleteProductFromCart,
  clearCart,
  syncCartData,
} = guestCartSlice.actions; // Export the action to use in components
export default guestCartSlice.reducer; // Export the reducer to include in the store
