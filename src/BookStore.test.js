import { render, screen } from '@testing-library/react';
import * as bookList from './books.json'
import BookStore from './BookStore';


describe('BookStore', () => {

    it('should list the name of possible books', () => {
        const books = bookList.books
        render(<BookStore books={books} />)

        const listItems = screen.getAllByRole('listitem')


        expect(listItems[0]).toHaveTextContent('Agile Testing Condensed: A Brief Introduction')
        expect(listItems[1]).toHaveTextContent('Die Physiker. Eine Komödie in zwei Akten')
    })

})
