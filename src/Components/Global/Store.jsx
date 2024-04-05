import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import myReducer from "./Features"
import Features from "./Features";
// import CartSlice from "./CartSlice";
// import cartReducer from "./CartSlic


const PersistConfig ={
   key: "root",
   storage,
}

const persistedReducer = persistReducer(PersistConfig, Features);

export const store = configureStore({
    reducer:{persistedReducer},
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware({
        serializableCheck:{
            ignoredActions: [PERSIST]
        }
    })
})