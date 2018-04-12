import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({ books, onClickGetGoogleBooks, onTest }) => (
  <div>
    <h2>BookList</h2>
    <button 
      onClick={onClickGetGoogleBooks}
      className="btn btn-success"
    >getBooks into Redux Store</button>
    { books.map((item, index) => <BookListItem 
        book={item}
        key={item.etag}
        index={index}
      />) 
    }
  </div>
)

export default BookList;
