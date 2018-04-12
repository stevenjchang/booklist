import React from 'react';

class BookListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let book = this.props.book;
    let title = book.volumeInfo ? book.volumeInfo.title : 'no-title';
    let price = book.saleInfo && book.saleInfo.retailPrice ? book.saleInfo.retailPrice.amount : 0.00;
    let publishedDate = book.volumeInfo ? book.volumeInfo.publishedDate : 'no-published-date';

    return (
      <div>BookListItem: {book.id} 
        <ul>
          <li>title: {title} ${price}</li>
          <li>publishedDate: {publishedDate}</li>
        </ul>
      
      </div>
    )
  }
}

export default BookListItem;
