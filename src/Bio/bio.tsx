import React from 'react';
import './bio.css';
import author_pic from './Ginearosa-author-pic.jpg';
import { bioText } from './bio-text';
import podcast_img from './podcast_img.png'

const Bio: React.FC = () => {
  
  return (
    <div className='bio'>
        <div className="container">
          <div className='container-inner'>
            <div className='bio-text'>
              <text className='author-header'>Author</text> <br/>
              {bioText}
            </div>
              <img src={author_pic} className="author-pic" />
          </div>
          <div className='quick-access'>
            <a className='personal'
              href="https://www.amazon.com/Cut-Me-Open-Make-Whole/dp/1946874876" target="_blank" rel="noopener noreferrer">
              <img
                src="https://m.media-amazon.com/images/I/71rFtvzJ1wL._SL1500_.jpg"
                className="bubble-pic"
                alt="Book Cover"
              />
              <span className="tooltip">book</span>
            </a>  
            <a
              className='personal'
              href="https://podcasts.apple.com/us/podcast/cutting-open-ginearosa-carbone-and-not-leaving-any-wholes/id680438389?i=1000615657219"
              target="_blank"
              rel="noopener noreferrer"
              
            >
              <img
                src={podcast_img}
                className="bubble-pic"
                alt="Podcast Pic"
              />
              <span className="tooltip">podcast feature</span>
              </a>        
          </div>
        </div>
    </div>
  );
}

export default Bio;
