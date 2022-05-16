import { createStore } from "redux";
import { rootReducer } from "./rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ['filters', 'positions'],
  // blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const configureStore = () => {
  return createStore(
    persistedReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
};
