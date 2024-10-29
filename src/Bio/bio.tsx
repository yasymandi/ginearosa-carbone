import React from 'react';
import './bio.css';
import pic from './Ginearosa-author-pic.jpg';
import { bioText } from './bio-text';

const Bio: React.FC = () => {
  
  

  return (
    <div className='bio'>
        <div className="container">
          <img src={pic} className="author-pic" />
          <p className='bio-text'>{bioText}</p>
        </div>
    </div>
  );
}

export default Bio;
