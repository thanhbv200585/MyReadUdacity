import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import BookShelf from "../components/BookShelf";
import { getAll, update } from "../BooksAPI";

const ListBooks = () => {
    const [showSearchPage, setShowSearchpage] = useState(false);
    const [allBooks, setAllBooks] = useState([]);
    let navigate = useNavigate();
    const categories = [
      { type: "currentlyReading", title: "Currently Reading" },
      { type: "wantToRead", title: "Want To Read" },
      { type: "read", title: "Completed" },
    ];

    useEffect(() => {
      getAll().then((books) => {
        setAllBooks(books);
      });
    }, []);

    const onChangeShelf = (book, shelf) => {
      update(book, shelf).then(() => {
        book.shelf = shelf;
        setAllBooks((prevBooks) => {
          return prevBooks.map((b) => (b.id === book.id ? book : b));
        });
      })
    }
    return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {categories.map((category, index) => {
                const listBooks = allBooks.filter((book) => book.shelf === category.type) 
                return (
                  <BookShelf key={index} books={listBooks} onChangeShelf={onChangeShelf} shelfName={category.title}/>
                )
              })}
            </div>
          </div>
          <div className="open-search">
            <a onClick={() => {
              setShowSearchpage(!showSearchPage);
              navigate('/search', {state: {
                allBooks: allBooks
              }});
            }}>Add a book</a>
          </div>

        </div>
    )
}

export default ListBooks;
