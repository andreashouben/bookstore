import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BookStore from "./components/bookstore/BookStore";
import * as bookList from './books.json'

ReactDOM.render(
    <React.StrictMode>
        <BookStore books={bookList.books} title="Black Books"/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
