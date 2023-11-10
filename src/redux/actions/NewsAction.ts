
import { Dispatch } from 'redux';
import axios from 'axios';
import { fetchNewsFailure, fetchNewsRequest, fetchNewsSuccess } from '../reducers/NewsReducer';

export const getNewsAction = () => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchNewsRequest());

    try {
      const response = await axios.get(
        'https://newsapi.org/v2/everything?q=apple&from=2023-11-09&to=2023-11-09&sortBy=popularity&apiKey=d1a40ab1a6654e6f8d4e4353d1bf2287'
      );

      dispatch(fetchNewsSuccess(response.data.articles));
    } catch (error) {
      dispatch(fetchNewsFailure('Failed to fetch news.'));
    }
  };
};
