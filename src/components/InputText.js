import React from 'react';
import { InputTextStyle } from '../styles';


const InputText = ({ label, name, value, isHidden, onChange, onKeyUp }) => {
  return (
    <InputTextStyle isHidden={isHidden}>
      <label htmlFor={name}>{label}</label>
      <input type="text" value={value} onChange={onChange}/>
    </InputTextStyle>
  );
}

export default InputText;