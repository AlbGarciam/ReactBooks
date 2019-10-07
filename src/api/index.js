import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

export const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});
