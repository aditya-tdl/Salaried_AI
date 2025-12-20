import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "../Slices/AuthSlice";
import userReducer from "../Slices/UserSlice";
import adminReducer from "../Slices/adminSlice";
import snackbarReducer from "../Slices/snackbarSlice";
import loaderReducer from "../Slices/loaderSlice";
import darkModeReducer from "../Slices/darkModeSlice";
import cartReducer from "../Slices/CartSlice";
import guestCartSlice from "../Slices/guestCartSlice";
import loginModalSlice from "../Slices/LoginModalSlice";
import cartDrawerSlice from "../Slices/CartDrawerSlice";
import offerDrawerSlice from "../Slices/OfferDrawerSlice"

const rootReducer = combineReducers({
  auth: authReducer,
  snackbar: snackbarReducer,
  loader: loaderReducer,
  mode: darkModeReducer,
  cart: cartReducer,
  user: userReducer,
  admin: adminReducer,
  guestCart: guestCartSlice,
  loginModal: loginModalSlice,
  cartDrawer: cartDrawerSlice,
  offerDrawer: offerDrawerSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "cart", "user", "admin", "guestCart"], // Add only required slices here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export let persistor;

if (typeof window !== "undefined") {
  // Initialize persistor only on the client side
  persistor = persistStore(store);
}

export default store;
