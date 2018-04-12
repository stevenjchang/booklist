import React from 'react';
import BookList from './BookList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [{id: 1}, {id: 2}, {id: 3}],
    };
  }
  render() {
    return (
      <BookList books={this.state.books} />
    )
  }
}

export default App;
