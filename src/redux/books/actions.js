import * as types from './types';
import * as api from '../../api';
import _ from 'lodash';
import {Actions} from 'react-native-router-flux';

const LIMIT = 8;
export const setFetching = value => {
  return {
    type: types.BOOKS_SET_FETCHING,
    value: value,
  };
};

export const updateList = (list, total) => {
  return {
    type: types.BOOKS_UPDATE_LIST,
    list: list,
    total: total,
  };
};

export const updateItem = value => {
  return {
    type: types.BOOKS_UPDATE_ITEM,
    value: value,
  };
};

export const updateOffset = value => {
  return {
    type: types.BOOKS_UPDATE_OFFSET,
    value: value,
  };
};

export const initBooksList = () => {
  return dispatch => {
    dispatch(updateList([], 0));
    dispatch(updateOffset(0));
    dispatch(fetchBooksList());
  };
};

export const updateBooksListOffset = () => {
  return (dispatch, getState) => {
    const {offset} = getState().characters;
    const newOffset = offset + LIMIT;
    dispatch(updateOffset(newOffset));
    dispatch(fetchBooksList());
  };
};

export const fetchBooksList = () => {
  return (dispatch, getState) => {};
};

export const postBook = data => {
  return (dispatch, getState) => {};
};
