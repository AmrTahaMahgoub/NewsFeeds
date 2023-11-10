import {ApiResponse} from 'apisauce';

import {API} from '.';
import APIs, { ApisTypes } from './api-types';
import { dispatch, store } from '../redux/store/configureStore';
import { disableLoader, enableLoader } from '../redux/reducers/loadingReducer';
import { CustomToast } from '../helpers/toast';



type ApiMethodsTypes = 'get' | 'post' | 'put' | 'delete' | 'patch';

export async function request<T, R = null>({
  method,
  endPoint,
  callback,
  body,
  params,
}: {
  method: ApiMethodsTypes;
  endPoint?: keyof ApisTypes;
  body?: R;
  callback?: (res: ApiResponse<T>) => void;
  params?: string;
}) {
  const token = store.getState().userReducer.token;

  dispatch(enableLoader(endPoint!));
  if (token) API.setHeader('Authorization', `${token}`);

  const res: ApiResponse<T & ErrorsResponsesType> = await API[method](
    `${APIs[endPoint!]}${params ? params : ''}`,
    body ? body : {},
  );
  dispatch(disableLoader(endPoint!));
  try {
    if (callback) callback(res);

    if (res.ok) return res.data;
    else if (!res.ok) {
      handilErrors(res.data);
      console.log(res.data?.error);
    }
  } catch (e) {
    // CustomToast("Network error", "error")
    console.log('error in request ', e);
    CustomToast(`${e}`, 'error');
  }
}

const handilErrors = (data: any) => {
  let errorMessage = 'An unknown error occurred';

  if (data.error && data.error.message) {
    switch (data.error.message) {
      case 'user.error.phoneExists':
        errorMessage = 'This account has registered before!!.';
        break;
      case 'user.error.invalidPassword':
        errorMessage = 'Please check your phone and password!.';
        break;
      case '"categoryId" is required':
        errorMessage = 'please choose your category';
        break;

      default:
        errorMessage = data.error.message;
        break;
    }
  }

  CustomToast(errorMessage, 'error');
};

type ErrorsResponsesType = {
  error: {
    type: number;
    key: string;
    message: string;
  };
  status: any;
};
