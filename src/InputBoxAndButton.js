import React, { useState } from 'react';

const InputBoxAndButton = () => {
  const [inputValue, setInputValue] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    setDisplayText(inputValue);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Display Value</button>
      {displayText && <p>Value: {displayText}</p>}
    </div>
  );
};

export default InputBoxAndButton;
