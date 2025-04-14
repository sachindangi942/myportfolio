import { combineReducers, configureStore } from "@reduxjs/toolkit"
import theamReducer from "./fetures/TheamSlice"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}

const rootReducer = combineReducers({
    theam: theamReducer,
})

const persistReducers = persistReducer(persistConfig, rootReducer);
const Store = configureStore({
    reducer: persistReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    devTools: true,
})

export const persister = persistStore(Store);
export default Store