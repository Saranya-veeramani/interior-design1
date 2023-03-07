import React, { useState } from 'react';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [interest, setInterest] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="interest">Interest:</label>
        <select
          id="interest"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          <option value="">Select interest</option>
          <option value="Living Area">Living Area</option>
          <option value="Dinning Hall">Dinning Hall</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Bed Room">Bed Room</option>
          <option value="Bath Room">Bath Read</option>
        </select>
      </div>
      <button type="submit">Send now </button>
    </form>
  );
};

export default ContactForm;

