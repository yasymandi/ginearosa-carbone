import React from 'react';
import './bio.css';
import author_pic from './Ginearosa-author-pic.jpg';
import { bioText } from './bio-text';

const Bio: React.FC = () => {
  
  return (
    <div className='bio'>
        <div className="container">
          <div className='container-inner'>
            <div className='author-pic-div'>
              <img src={author_pic} className="author-pic" />
            </div>
            <div className='bio-text'>
              <text className='author-header'>Author</text> <br/>
              {bioText}
            </div>
          </div>
        </div>
    </div>
  );
}

export default Bio;
