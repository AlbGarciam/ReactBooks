import axios from 'axios';
import {BASE_URL, API_KEY} from '../config/api';
import qs from 'qs';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getBooks = params => {
  const queryParams = {
    ...params,
    key: API_KEY,
  };
  const paramStringify = qs.stringify(queryParams, {skipNulls: true});
  const url = `/books/v1/volumes?${paramStringify}`;
  return instance.get(url).then(response => response.data);
};
