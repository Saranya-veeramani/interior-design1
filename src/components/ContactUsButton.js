import React, { useState } from 'react';
import ContactForm from './ContactForm';
const ContactWithUsButton = () => {
        const [showForm, setShowForm] = useState(false);
  
    const handleClick = () => {
      setShowForm(true);
    };
  
    return (
      <>
        {!showForm && <button onClick={handleClick}>Contact Us</button>}
        {showForm && <ContactForm />}
      </>
    );
  };
  
  export default ContactWithUsButton;
  