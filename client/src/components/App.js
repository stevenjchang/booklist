import React from 'react';
import axios from 'axios';

import BookList from './BookList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{id: 1}, {id: 2}, {id: 3}],
    };
    this.sortBooks = this.sortBooks.bind(this);
  }

  componentDidMount() {
    this.getBooksFromGoogle();
  }

  getBooksFromGoogle() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=software&maxResults=40')
      .then((results) => {
        let data = results.data.items;
        this.setState({ books: data});
        console.log('books ==>', this.state.books);
      })
  }

  handleClick() {
    this.sortBooks(this.state.books);
  }

  sortBooks(originalList) {
    this.setState({ books: originalList.reverse() });
  }

  render() {
    return (
      <div>
        <button 
          onClick={() => this.handleClick()}
          className="btn btn-warning"
        >SORT Books NOW!</button>
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App;
