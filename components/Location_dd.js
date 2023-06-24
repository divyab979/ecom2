import React, { useState } from 'react';

const Location_dd = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className='flex lg:justify-end lg:mt-[-1.5%] lg:mr-[10%] justify-end mt-[-4%]'>
      <select value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select a location</option>
        <option value="option1">location 1</option>
        <option value="option2">location 2</option>
        <option value="option3">location 3</option>
      </select>
      
    </div>
  );
};

export default Location_dd;
