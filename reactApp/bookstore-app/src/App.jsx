import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BookList from './components/BookList';

function App() {

  //Storing book data
  const bookData = {
    "fiction": [
      {"title": "The Great Gatsby", "author": "F. Scott Fitzgerald", "price": 10.00},
      {"title": "1984", "author": "George Orwell", "price": 8.50},
      {"title": "The Catcher in the Rye", "author": "J.D. Salinger", "price": 9.80}
    ],
    "non-fiction": [
      {"title": "Sapiens: A Brief History of Humankind", "author": "Yuval Noah Harari", "price": 15.00},
      {"title": "In Cold Blood", "author": "Truman Capote", "price": 12.00},
      {"title": "The Diary of a Young Girl", "author": "Anne Frank", "price": 7.00}
    ],
    "children": [
      {"title": "Charlotte's Web", "author": "E.B. White", "price": 5.00},
      {"title": "The Gruffalo", "author": "Julia Donaldson", "price": 6.00},
      {"title": "Where the Wild Things Are", "author": "Maurice Sendak", "price": 8.00}
    ]
  };
  
  //States to keep track of internal vars 
  const [currentGenre, setGenre] = useState('fiction');
  const [showAll, setAll] = useState(true);


  const handleUpdateGenre = (genre) => {
    setGenre(genre);
    setAll(false); 
  };

  const handleShowAll = (bool) => {
    setAll(true); 
  };

  /* Original Render Books method updated to use ternary operators in original function
  const renderBooks = () => {
    if(showAll){
      return (
      <>
        <h3>Currently Showing All Books</h3>
        <hr></hr>
        <BookList bookList={bookData['fiction']} />
        <BookList bookList={bookData['non-fiction']} />
        <BookList bookList={bookData['children']} />
      </>
      )
    } else {
      return (
        <>
          <h3>Currently Showing {currentGenre} Books</h3>
          <hr></hr>
          <BookList bookList={bookData[currentGenre]} />
        </>
      )
    }
  }
  */ 

  return (
    <div>
      <h1>Online Bookstore</h1>
      <div>
        <button onClick={ () => handleShowAll()}> Show All</button>
        <button onClick={ () => handleUpdateGenre('fiction')}> Fiction Books</button>
        <button onClick={ () => handleUpdateGenre('non-fiction')}>Non-Fiction Books</button>
        <button onClick={ () => handleUpdateGenre('children')}>Childrens Books</button>
      </div>
     
      {/* Ternary operations to select either all books or only select genre*/}
      {showAll ? (
         <>
         <h3>Currently Showing All Books</h3>
         <hr></hr>
         <BookList bookList={bookData['fiction']} />
         <BookList bookList={bookData['non-fiction']} />
         <BookList bookList={bookData['children']} />
       </>
      ) : (
        <>
          <h3>Currently Showing {currentGenre} Books</h3>
          <hr></hr>
          <BookList bookList={bookData[currentGenre]} />
        </>
      )}



      {/*renderBooks()*/}

    </div>
  );
};



export default App;
