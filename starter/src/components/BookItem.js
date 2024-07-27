const BookItem = ( {book, onChangeShelf} ) => {
  const handleClick = (e) => {
    const selectedOption = e.target.value;
    onChangeShelf(book, selectedOption);
  }
  console.log(book);
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage:
                `url(${book.imageLinks ? book.imageLinks.smallThumbnail : ''})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={handleClick} value={book.shelf ? book.shelf : "none"}>
              <option value="move " disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default BookItem;