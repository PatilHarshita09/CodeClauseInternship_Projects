import React from 'react';
import LeftSection from './LeftSection'; //imported leftsection
import RightSection from './RightSection'; // imported rightsection 
import './container.css'
// parent component
const Container = () => {
  return (
    <div className="container">
      
      <LeftSection />
      <RightSection /> 
    </div>
  );
};

export default Container;
