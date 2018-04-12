import axios from 'axios';

const googleUrl = ``;

export const getGoogleBooks = () => {
  return dispatch => axios.get(googleUrl)
    .then(res => res.items)
    .then(
      data => dispatch({ type: 'BOOKS_GET', data }),
      err => dispatch({ type: 'BOOKS_GET_ERROR', err }),
    );
};
