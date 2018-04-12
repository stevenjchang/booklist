import { connect } from 'react-redux';
import { getGoogleBooks } from '../actions';
import BookList from '../components/BookList';

const mapStateToProps = (state) => {
  return {
    books: state.bookReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGetGoogleBooks: () => dispatch(getGoogleBooks()),
  };
};

const BooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);

export default BooksContainer;
