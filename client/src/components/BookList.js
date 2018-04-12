import React from 'react';
import BookListItem from './BookListItem';

const BookList = ({books}) => (
  <div>
    <h2>BookList</h2>
    { books.map((item, index) => <BookListItem 
        book={item}
        key={item.etag}
        index={index}
      /> 
    ) 
  }
  </div>
)

export default BookList;
