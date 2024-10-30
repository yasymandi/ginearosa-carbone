import React from 'react';
import './bio.css';
import pic from './Ginearosa-author-pic.jpg';
import { bioText } from './bio-text';

const Bio: React.FC = () => {
  
  return (
    <div className='bio'>
        <div className="container">
          <div className='bio-text'>
            <text className='author-header'>Author</text> <br/>
            {bioText}
          </div>
          <img src={pic} className="author-pic" />
        </div>
    </div>
  );
}

export default Bio;
