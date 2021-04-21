import React, {useEffect, useState} from 'react';
import Fieldset from "../Fieldset/Fieldset";

function TimeFieldset(props) {
  const [radioInputs, setRadioInputs] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [addressInputs, setAddressInputs] = useState([]);

  useEffect(() => {
    setRadioInputs(document.querySelectorAll('.form__input_type_radio'))
    setButtons(document.querySelectorAll('.form__btn'))
    setAddressInputs(document.querySelectorAll('.form__input_type_address'))
  }, [])

  const handleLabelClick = (evt) => {
    const target = evt.target
    const currentTarget = evt.currentTarget
    const button = currentTarget.closest('.form__label').querySelector('.form__btn')
    const currentRadioInput =
      currentTarget.closest('.form__label').querySelector('.form__input')
    const currentAddressInput =
      currentTarget.closest('.form__label').querySelector('.form__input_type_address')

    if (target.classList.contains('form__input_type_address')) return

    buttons.forEach(btn => {
      btn.setAttribute('disabled', 'disabled')
    })

    addressInputs.forEach(input => {
      input.setAttribute('disabled', 'disabled')
    })

    radioInputs.forEach(input => {
      if (input === currentRadioInput) {
        button.removeAttribute('disabled')
        currentAddressInput.removeAttribute('disabled')
      }
    })
  }

  return (
    <Fieldset type={'time'} count={'4'} title={'Время'}>
      <div className="form__text-wrap">
        <p className="form__where-text">Когда прибыть на точку</p>
        <p className="form__distance-text">700 км в день</p>
      </div>
      <label onClick={handleLabelClick} htmlFor="address-1" className="form__label form__label_type_radio">
        <input className="form__input form__input_type_radio" type="radio" name="address" id="address-1"/>
        <div className="form__visible-radio" />
        <div className="form__input-wrap form__input-wrap_color_dark">
          <input disabled className="form__input form__input_type_address" type="text" placeholder="Адрес не указан"/>
        </div>
        <button disabled className="form__btn">
          <span className="form__btn-text">Не выбрано</span>
        </button>
      </label>
      <label onClick={handleLabelClick} htmlFor="address-2" className="form__label form__label_type_radio">
        <input className="form__input form__input_type_radio" type="radio" name="address" id="address-2"/>
        <div className="form__visible-radio" />
        <div className="form__input-wrap form__input-wrap_color_dark">
          <input disabled className="form__input form__input_type_address" type="text" placeholder="Адрес не указан"/>
        </div>
        <button disabled className="form__btn">
          <span className="form__btn-text">Не выбрано</span>
        </button>
      </label>
    </Fieldset>
  );
}

export default TimeFieldset;
