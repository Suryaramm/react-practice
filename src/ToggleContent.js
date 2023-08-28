import React, { useState } from 'react';

function ToggleContent() {
  const [showContent, setShowContent] = useState(false);

  const toggleContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <button onClick={toggleContent}>Toggle Content</button>
      {showContent && <p>This is the toggled content.</p>}
      {showContent ?<p>This is the toggled content.</p>:<p>no content</p>}
    
 
    </div>
  );
}

export default ToggleContent;
