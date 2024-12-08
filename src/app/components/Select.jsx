import React from 'react';
//import Select from 'react-select';
import dynamic from 'next/dynamic';

const SelectItem = ({ options, onChange, value }) => {

const Select = dynamic(() => import('react-select') );
    
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isMulti={false}
      // Enable multiple selection
    />
  );
};

export default SelectItem;