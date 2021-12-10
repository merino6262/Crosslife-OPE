import React from "react";
import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";


import reducers from "./reducers";


const persistConfig ={
    key: 'root',
    storage,
    whitelist:['usuario']
};

const pReducer = persistReducer(persistConfig, reducers);


const store = createStore(pReducer);
const persistor = persistStore( store );

export { store, persistor };