// reducers/NewsReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { NewsType } from '../../@types';

export type NewsState = {
  data: NewsType[];
  loading: boolean;
  error: string | null;
};

const initialState: NewsState = {
  data: [],
  loading: false,
  error: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    fetchNewsRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchNewsSuccess(state, action: PayloadAction<NewsType[]>) {
      state.loading = false;
      state.data = action.payload;
    },
    fetchNewsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;
export default newsSlice.reducer;
