// ContactInfoCard.js

import React from 'react';
import './ContactInfoCard.css';

const ContactInfoCard = ({ iconUrl, text, link, onEmailClick }) => {
  const handleIconClick = () => {
    // Navigate to the provided link
    window.open(link, 'www.gmail.com'); // Opens link in a new tab
    onEmailClick(text); // Pass the clicked email to the parent component
  };

  return (
    <div className='contact-details-card' onClick={handleIconClick}>
      <div className="icon">
        {/* Wrap the image in an anchor tag with the provided link */}
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={iconUrl} alt={text} />
        </a>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
