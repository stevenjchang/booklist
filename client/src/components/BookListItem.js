import React from 'react';

class BookListItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>BookListItem: {this.props.book.id} </div>
    )
  }
}

export default BookListItem;
