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

export const updateSearchQuery = value => {
  return {
    type: types.BOOKS_UPDATE_SEARCH_QUERY,
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

export const updateBookListOffset = () => {
  return (dispatch, getState) => {
    const {offset} = getState().books;
    const newOffset = offset + LIMIT;
    dispatch(updateOffset(newOffset));
    dispatch(fetchBooksList());
  };
};

export const updateSearch = value => {
  return dispatch => {
    dispatch(updateSearchQuery(value));
    dispatch(initBooksList());
  };
};

export const fetchBooksList = () => {
  return (dispatch, getState) => {
    const {offset, list, searchQuery} = getState().books;
    const searchText = searchQuery.split(' ').join('+');
    const params = {q: searchText, maxResults: LIMIT, startIndex: offset};
    dispatch(setFetching(true));
    api
      .getBooks(params)
      .then(response => {
        const bookList = _.get(response, 'items', []);
        const totalItems = _.get(response, 'totalItems', 0);
        dispatch(updateList([...list, ...bookList], totalItems));
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setFetching(false));
      });
  };
};

export const insertBookOnList = book => {
  return (dispatch, getState) => {
    const {list, total} = getState().books;
    dispatch(updateList([book, ...list], total + 1));
  };
};
