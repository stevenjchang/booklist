import React from 'react';
import axios from 'axios';

import BookList from './BookList';
import BooksContainer from '../containers/BooksContainer'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{id: 1}, {id: 2}, {id: 3}],
    };
    this.sortBooks = this.sortBooks.bind(this);
  }

  componentDidMount() {
    // this.getBooksFromGoogle();
  }

  getBooksFromGoogle() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=software&maxResults=40')
      .then((results) => {
        let data = results.data.items;
        let cleanData = data.map((item, index) => {
          let list = item;
          list.number = index;
          if (!list) {
            return {}
          }
          if (!list.volumeInfo) {
            list.volumeInfo = { title: 'notitle', publishedDate: 'nopublisheddate' };
          }
          if (!list.saleInfo.retailPrice) {
            list.saleInfo.retailPrice = {};
          }
          if (!list.saleInfo.retailPrice.amount) {
            list.saleInfo.retailPrice.amount = 1;
          }
          return list;
        })
        this.setState({ books: cleanData});
      })
  }

  handleClick() {
    this.sortBooks(this.state.books);
  }

  sortBooks(originalList) {
    let sortedList = originalList.sort((a,b) => {
      return b.saleInfo.retailPrice.amount - a.saleInfo.retailPrice.amount;
    });
    this.setState({ books: sortedList });
  }

  render() {
    return (
      <div>
        <button 
          onClick={() => this.handleClick()}
          className="btn btn-warning"
        >SORT by price!</button>
        <BooksContainer />
      </div>
    )
  }
}

export default App;
