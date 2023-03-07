import React, { useState } from 'react';

const Read = ({ text, maxLength }) => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
  };

  if (text.length <= maxLength) {
    return <span>{text}</span>;
  }

  return (
    <span>
      {isTruncated ? `${text.slice(0, maxLength)}... ` : text}
      <button onClick={toggleTruncate}>
        {isTruncated ? 'Read More' : 'Show Less'}
      </button>
    </span>
  );
};

export default Read;
