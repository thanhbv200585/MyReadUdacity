import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import BookItem from "../components/BookItem";
import { search, update } from "../BooksAPI";

const SearchBooks = () => {
    const location = useLocation();
    const [searchBooks, setSearchBooks] = useState([]);
    const [allBooks, setAllBooks] = useState(location.state?.allBooks || []);
    const [text, setText] = useState("");

    const handleChange = (e) => {
      const value = e.target.value;
      setText(value)
      if (value) {
        search(value).then((books) => {
          setSearchBooks(books || []);
        })
      }
    }

    const onChangeShelf = (book, shelf) => {
      update(book, shelf).then(() => {
        book.shelf = shelf;
        setAllBooks((prevBooks) => {
          return prevBooks.map((b) => (b.id === book.id ? book : b));
        });
      })
    }

    const navigate = useNavigate();
    return (
        <div className="search-books">
          <div className="search-books-bar">
            <a
              className="close-search"
              onClick={() => {
                navigate("/");
              } }
            >
              Close
            </a>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Search by title, author, or ISBN"
              />
            </div>
          </div>
          <div className="search-books-results">
          {
            (searchBooks.length > 0) ? 
            <ol className="books-grid">
              {searchBooks.map(book => {
                return (
                  <BookItem book={book} onChangeShelf={onChangeShelf} key={book.id}/>
                )
              })}
            </ol> : <></>
          }  
          </div>
        </div>
    )
}

export default SearchBooks;