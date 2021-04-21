import React from 'react';

function DropdownListItem(props) {
  const { id, value, name } = props

  const classnames = {
    label: 'form__label form__label_type_radio form__label_type_option',
    optionInput: 'form__input'
  }

  return (
    <li>
      <label
        htmlFor={id}
        className="form__label form__label_type_radio form__label_type_option">
        <span>{value}</span>
        <input value={value} id={id} className={classnames.optionInput} type="radio" name={name}/>
      </label>
    </li>
  );
}

export default DropdownListItem;
