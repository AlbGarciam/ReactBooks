import * as Types from './types';

const initialState = {
  list: [],
  total: 0,
  offset: 0,
  selectedItem: null,
  isFetching: false,
};

export default reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case Types.BOOKS_SET_FETCHING:
      return {
        ...state,
        isFetching: action.value,
      };
    case Types.BOOKS_UPDATE_ITEM:
      return {
        ...state,
        selectedItem: action.value,
      };
    case Types.BOOKS_UPDATE_LIST:
      return {
        ...state,
        list: action.list,
        total: action.total,
      };
    case Types.BOOKS_UPDATE_OFFSET:
      return {
        ...state,
        offset: action.value,
      };
    default:
      return state;
  }
};
