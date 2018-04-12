const bookReducer = (state = [], action) => {
  switch (action.type) {
    case 'BOOKS_GET':
      return action.data
    default:
      return state;
  }
};

export default bookReducer;
