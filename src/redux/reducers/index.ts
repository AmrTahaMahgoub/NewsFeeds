import {combineReducers} from "@reduxjs/toolkit";


import loadingReducer from "./loadingReducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NewsReducer from "./NewsReducer";
import { persistReducer } from "redux-persist";

const rootPersistConfig = {
  key: "root",
  storage: AsyncStorage,
  keyPrefix: "redux-root",
  whitelist: [],
};

const NewsConfig = {
  key: 'News',
  storage: AsyncStorage,
  keyPrefix: 'redux-News',
  whitelist: ['News'],
};

const rootReducers = combineReducers({
  loadingReducer,
  NewsReducer,
  //   userReducer: persistReducer(userPersistConfig, userReducer),
});

export {rootPersistConfig, rootReducers};
