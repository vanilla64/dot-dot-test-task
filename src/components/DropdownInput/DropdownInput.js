import React, { useState } from 'react';
import dropdownIcon from '../../images/chevron-down.svg'

function DropdownInput({ children }) {
  const [inputValue, setInputValue] = useState('');
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const classnames = {
    optionList: isOptionListOpen
      ? 'form__list form__list_visible'
      : 'form__list',
    input: 'form__input form__input_width_half',
    optionInput: 'form__input',
    dropdownIcon: isOptionListOpen
      ? 'form__dropdown-icon form__dropdown-icon_up'
      : 'form__dropdown-icon'
  }

  const handleInputClick = () => {
    if (isOptionListOpen) return setIsOptionListOpen(false)
    setIsOptionListOpen(true)
  }

  const handleListClick = (evt) => {
    setInputValue(evt.target.value)
    setIsOptionListOpen(false)
  }

  return (
    <div className="form__dropdown-wrap">
      <img className={classnames.dropdownIcon} src={dropdownIcon} alt="dropdown-icon"/>
      <div className="form__input-wrap form__input-wrap_width_half">
        <input
          onClick={handleInputClick}
          value={inputValue ? inputValue : ''}
          type="text"
          readOnly={true}
          placeholder="Не выбрана"
          className={classnames.input}
        />
      </div>

      <ul onClick={handleListClick} className={classnames.optionList}>
        { children }
      </ul>
    </div>
  );
}

export default DropdownInput;
