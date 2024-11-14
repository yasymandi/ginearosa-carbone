import React from 'react';
import './connect.css';

const Connect: React.FC = () => {
  
  return (
    <div>
        <div className='connect'> <br/>
            <text className='inquiries-header'>For inquiries and to connect</text> <br/><br/ >
            <text className='general-text'>Send an email to the author:</text> <br/>
            <text className='personal'>carbo056@d.umn.edu</text><br/><br/>  
            <text className='general-text'>Checkout her podcast feature:</text><br/>
            <a
              className='personal'
              href="https://podcasts.apple.com/us/podcast/cutting-open-ginearosa-carbone-and-not-leaving-any-wholes/id680438389?i=1000615657219"
              target="_blank"
              rel="noopener noreferrer"
            >Podcast Feature</a>
          </div>
    </div>
  );
}

export default Connect;
