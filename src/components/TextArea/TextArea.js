import React from 'react';

function TextArea(props) {
  return (
    <textarea
      placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу"
      className="form__textarea" cols="30" rows="10"
    />
  );
}

export default TextArea;
