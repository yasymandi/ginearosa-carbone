import React, { useState } from 'react';
import './book-links.css';
import { cutMeOpenDescription } from './CutMeOpenDescription'

const Books: React.FC = () => {
  // Define an array of books
  const books = [
    {
      title: 'Cut Me Open: Make Me Whole',
      link: 'https://www.amazon.com/Cut-Me-Open-Make-Whole/dp/1946874876',
      image: 'https://m.media-amazon.com/images/I/71rFtvzJ1wL._SL1500_.jpg',
      description: cutMeOpenDescription,
    },
    {
      title: 'Coming Soon - Another Book Title',
      // link: 'https://www.amazon.com/Another-Book-Title/dp/example',
    },
    // {
    //   title: 'Yet Another Book',
    //   link: 'https://www.amazon.com/Yet-Another-Book/dp/example',
    // },
    // Add more books as needed
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % books.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + books.length) % books.length);
  };

  return (
    <div className="books">
      <div className="book-carousel">
        <button onClick={handlePrev} disabled={books.length <= 1}>
          &lt; 
        </button>
        <div className="book-item">
          <a
            href={books[currentIndex].link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={books[currentIndex].image} alt={books[currentIndex].title} className="book-image" />
            <br/>
            {books[currentIndex].title}
          </a>
          <br/>
          <p className='book-description'>{books[currentIndex].description}</p>
        </div>
        <button onClick={handleNext} disabled={books.length <= 1}>
           &gt;
        </button>
      </div>
    </div>
  );
}

export default Books;
