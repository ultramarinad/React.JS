import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { profileReducer } from "./Profile/reducer";
import { chatsReducer } from "./chats/reducer";
import { messageReducer } from "./messages/reducer";
import { catsReducer } from "./cats/reducer";
import { userReducer } from "./user/reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messageReducer,
  cats: catsReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
