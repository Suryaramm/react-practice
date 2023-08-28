import React from 'react';
import PropTypes from 'prop-types';
import SubChildCompmonent from './SubChildCompmonent';

function PropValidation(props) {
  const handleButtonClick = () => {
    console.log('Button clicked in ParentComponent');
  };
  return (<div>
    {props.message}
  
  <SubChildCompmonent  onButtonClick={handleButtonClick}/>
  
  </div>
  );
}

PropValidation.propTypes = {
  message: PropTypes.string
};

export default PropValidation;
