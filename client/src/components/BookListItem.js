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
    let image = book.volumeInfo && book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'www.noimage.com';

    return (
      <div>BookListItem: {book.id} 
        <ul>
          <li>title: {title} ${price}</li>
          <li>publishedDate: {publishedDate}</li>
          <img src={image} />
        </ul>
      
      </div>
    )
  }
}

export default BookListItem;
