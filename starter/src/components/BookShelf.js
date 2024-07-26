import BookItem from "./BookItem";

const BookShelf = ({ books, onChangeShelf, shelfName }) => {
    return (
      (books.length > 0) ?
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {books.map(book => {
              return (
                <BookItem book={book} key={book.id} onChangeShelf={onChangeShelf} />
              )
            })}
          </ol>
        </div>
      </div> 
      : <></>
    )
}

export default BookShelf;