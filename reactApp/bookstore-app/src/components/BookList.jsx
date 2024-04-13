import React from 'react';

// Function is a component that displays an individual book title, author, and price
const BookList = ({ bookList }) => {
  return (
    <>

      {bookList.map((book, key) => (
        
        <div>
            <ul>
                <li><div style={{ fontStyle: 'italic' }}>{book.title}</div> by {book.author} @ ${book.price}</li>
            </ul>
        </div>

      ))}
    </>
  );
};

export default BookList;
