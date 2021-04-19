import React, {useEffect, useState} from 'react';
import Fieldset from "../Fieldset/Fieldset";

function Form(props) {
  const [isTempVisible, setIsTempVisible] = useState(false);
  const [radioInputs, setRadioInputs] = useState([]);
  const [buttons, setButtons] = useState([]);
  const [addressInputs, setAddressInputs] = useState([]);


  useEffect(() => {
    setRadioInputs(document.querySelectorAll('.form__input_type_radio'))
    setButtons(document.querySelectorAll('.form__btn'))
    setAddressInputs(document.querySelectorAll('.form__input_type_address'))
  }, [])

  const handleCheckboxClick = (evt) => {
    if(!evt.target.checked) {
      return setIsTempVisible(false)
    }
    setIsTempVisible(true)
  }

  const handleRadioClick = (evt) => {
    const currentTarget = evt.currentTarget
    const button = currentTarget.closest('.form__label').querySelector('.form__btn')
    const currentRadioInput = currentTarget.closest('.form__label').querySelector('.form__input')
    const currentAddressInput = currentTarget.closest('.form__label').querySelector('.form__input_type_address')

    console.log(currentTarget.closest('.form__label'))

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
    <form className="form">
      <Fieldset type={'direction'} count={'1'} title={'Маршрут'}>
        <label className="form__label form__label_dir_row">
          <p className="form__input-name">Откуда</p>
          <input className="form__input form__input_width_full" />
        </label>
        <label className="form__label form__label_dir_row">
          <p className="form__input-name">Куда</p>
          <input className="form__input form__input_width_full" />
        </label>
      </Fieldset>
      <Fieldset type={'transport'} count={'2'} title={'Транспорт'}>
        <div className="form__input-container">
          <label className="form__label form__label_width_half">
            <p className="form__input-name">Грузоподъёмность</p>
            <input className="form__input form__input_width_half" />
          </label>
          <label className="form__label form__label_width_half">
            <p className="form__input-name">Способ погрузки</p>
            <input className="form__input form__input_width_half" />
          </label>
        </div>
      </Fieldset>
      <Fieldset type={'cargo'} count={'3'} title={'Груз'}>
        <div className="form__input-container">
          <label className="form__label form__label_dir_row">
            <p className="form__input-name">Тип груза</p>
            <input className="form__input form__input_width_full" />
          </label>
        </div>
        <div className="form__input-container">
          <label className="form__label form__label_width_half">
            <p className="form__input-name">Класс опасности</p>
            <input className="form__input form__input_width_half" />
          </label>
          <label className="form__label form__label_width_half">
            <p className="form__input-name">Объявленная ценность, &#8381;</p>
            <input className="form__input form__input_width_half" placeholder="&ge; 1" />
          </label>
        </div>
        <label onClick={handleCheckboxClick} className="form__label form__label_type_checkbox">
          <input className="form__input form__input_type_checkbox" type="checkbox" name="" id=""/>
          <div className="form__visible-checkbox" />
          <p className="form__input-name">Требуется температурный режим</p>
        </label>
        {
          isTempVisible &&
          <div className="form__input-container form__input-container_type_temp">
            <label className="form__label form__label_width_half">
              <p className="form__input-name">От, &#176;C</p>
              <input className="form__input form__input_width_half" />
            </label>
            <label className="form__label form__label_width_half">
              <p className="form__input-name">До, &#176;C</p>
              <input className="form__input form__input_width_half" />
            </label>
          </div>
        }
      </Fieldset>
      <Fieldset type={'time'} count={'4'} title={'Время'}>
        <div className="form__text-wrap">
          <p className="form__where-text">Когда прибыть на точку</p>
          <p className="form__distance-text">700 км в день</p>
        </div>
        <label htmlFor="address-1" className="form__label form__label_type_radio">
          <input className="form__input form__input_type_radio" type="radio" name="address" id="address-1"/>
          <div onClick={handleRadioClick} className="form__visible-radio" />
          <div className="form__input-wrap">
            <input disabled className="form__input form__input_type_address" type="text" placeholder="Адрес не указан"/>
          </div>
          <button disabled className="form__btn">
            <span className="form__btn-text">Не выбрано</span>
          </button>
        </label>
        <label htmlFor="address-2" className="form__label form__label_type_radio">
          <input className="form__input form__input_type_radio" type="radio" name="address" id="address-2"/>
          <div onClick={handleRadioClick} className="form__visible-radio" />
          <div className="form__input-wrap">
            <input disabled className="form__input form__input_type_address" type="text" placeholder="Адрес не указан"/>
          </div>
          <button disabled className="form__btn">
            <span className="form__btn-text">Не выбрано</span>
          </button>
        </label>
      </Fieldset>
      <textarea
        placeholder="Укажите особенности въезда на территорию склада или подъезда к адресу"
        className="form__textarea" cols="30" rows="10"
      />
    </form>
  );
}

export default Form;
