import axios from 'axios';

const googleUrl = 'https://www.googleapis.com/books/v1/volumes?q=software&maxResults=40';

export const getGoogleBooks = () => {
  return dispatch => axios.get(googleUrl)
    .then(res => {
      return res.data.items;
    })
    .then(
      data => dispatch({ type: 'BOOKS_GET', data }),
      err => dispatch({ type: 'BOOKS_GET_ERROR', err }),
    )
};
