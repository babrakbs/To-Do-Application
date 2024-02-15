import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { persistReducer } from "redux-persist";
import AuthSlice from "./reducer";

const persistConfig = {
    key: "root",
    storage: AsyncStorage,
};
const persistedReducer = persistReducer(persistConfig, AuthSlice);

export const Store = configureStore({
    reducer: {
        reducer: persistedReducer,
    },
});
setupListeners(Store.dispatch);