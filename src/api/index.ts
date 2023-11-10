import {create} from 'apisauce';

export const API = create({
  baseURL:
    'https://newsapi.org/v2/everything?q=tesla&from=2023-10-10&sortBy=publishedAt&apiKey=d1a40ab1a6654e6f8d4e4353d1bf2287',
  headers: {
    'Content-Type': 'application/json',
  },
});
API.addMonitor(() => {});
