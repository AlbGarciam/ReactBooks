import {connect} from 'react-redux';
import View from './view';

// Connecting component with redux store
const mapStateToProps = state => {
  return {
    book: state.books.selectedItem,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(View);
