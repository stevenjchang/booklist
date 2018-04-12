import React from 'react';
import axios from 'axios';

import BookList from './BookList';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{id: 1}, {id: 2}, {id: 3}],
    };
  }

  componentDidMount() {
    this.getBooksFromGoogle();
  }

  getBooksFromGoogle() {
    axios.get('https://www.googleapis.com/books/v1/volumes?q=software&maxResults=40')
      .then((results) => {
        let data = results.data.items;
        this.setState({ books: data});
      })
  }
  render() {
    return (
      <BookList books={this.state.books} />
    )
  }
}

export default App;
