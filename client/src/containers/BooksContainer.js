import { connect } from 'react-redux';
import { getGoogleBooks } from '../actions';
import BookList from '../components/BookList';

const mapStateToProps = (state) => {
  return {
    list: state.books,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickGetJobs: () => {
      dispatch(getGoogleBooks());
    },
  };
};

const BooksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(BookList);

export default BooksContainer;
