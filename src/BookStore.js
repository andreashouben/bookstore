import logo from './logo.svg';
import './App.css';

function BookStore({ books }) {

    const bookList = books.map(book => <li key={book.isbn}>{book.title}</li>)

    return (
        <ol>
            {bookList}
        </ol>
    );
}

export default BookStore;
