import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./Profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { catsReducer } from "./cats/reducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messageReducer,
  cats: catsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
