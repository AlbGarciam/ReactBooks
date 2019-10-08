import {connect} from 'react-redux';
import {Actions as BooksActions} from '../../../redux/books';
import View from './view';

// Connecting component with redux store
const mapStateToProps = state => {
  return {
    bookList: state.books.list, // Coge el nombre del fichero redux/index
    isFetching: state.books.isFetching,
    total: state.books.total,
    offset: state.books.offset,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initBooksList: () => {
      dispatch(BooksActions.initBooksList());
    },
    updateSelectedBook: book => {
      dispatch(BooksActions.updateItem(book));
    },
    updateBookListOffset: () => {
      dispatch(BooksActions.updateBookListOffset());
    },
    insertBookList: book => {
      dispatch(BooksActions.insertBookOnList(book));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
