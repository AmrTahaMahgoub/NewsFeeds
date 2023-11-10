
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import newsReducer from '../reducers/NewsReducer';

const rootReducer = combineReducers({
  news: newsReducer,

});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default store;
