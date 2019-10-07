import {connect} from 'react-redux';
import {Actions as BooksActions} from '../../../redux/books';
import View from './view';

// Connecting component with redux store
const mapStateToProps = state => {
  return {
    bookList: state.books.list, // Coge el nombre del fichero redux/index
    isFetching: state.books.isFetching,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    initBooksList: () => {
      dispatch(BooksActions.initBooksList());
    },
    updateSelectedBook: book => {
      dispatch(BooksActions.updateSelectedBook(book));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
