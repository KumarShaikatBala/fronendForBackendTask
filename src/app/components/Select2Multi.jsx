import React from 'react';
import Select from 'react-select';

const SelectDropdown = ({ options, onChange, value }) => {
  return (
    <Select
      options={options}
      value={value}
      onChange={onChange}
      isMulti  // Enable multiple selection
    />
  );
};

export default SelectDropdown;