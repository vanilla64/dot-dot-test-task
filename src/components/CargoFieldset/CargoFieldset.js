import React, {useState} from 'react';
import Fieldset from "../Fieldset/Fieldset";
import DropdownInput from "../DropdownInput/DropdownInput";
import DropdownListItem from "../DropdownListItem/DropdownListItem";

function CargoFieldset(props) {
  const [isTempVisible, setIsTempVisible] = useState(false);

  const handleCheckboxClick = (evt) => {
    if(!evt.target.checked) {
      return setIsTempVisible(false)
    }
    setIsTempVisible(true)
  }

  return (
    <Fieldset type={'cargo'} count={'3'} title={'Груз'}>
      <div className="form__input-container">
        <label className="form__label form__label_dir_row">
          <p className="form__input-name">Тип груза</p>
          <DropdownInput>
            <DropdownListItem id={'option-1'} value={'Длиииииииииииииииииииииинныыый текст'} name={'cargoType'} />
            <DropdownListItem id={'option-2'} value={'Вариант 2'} name={'cargoType'} />
            <DropdownListItem id={'option-3'} value={'Вариант 3'} name={'cargoType'} />
            <DropdownListItem id={'option-4'} value={'Вариант 4'} name={'cargoType'} />
            <DropdownListItem id={'option-5'} value={'Вариант 5'} name={'cargoType'} />
          </DropdownInput>
        </label>
      </div>
      <div className="form__input-container">
        <label className="form__label form__label_width_half">
          <p className="form__input-name">Класс опасности</p>
          <DropdownInput>
            <DropdownListItem id={'class-1'} value={'Класс 1'} name={'dangerClass'} />
            <DropdownListItem id={'class-2'} value={'Класс 2'} name={'dangerClass'} />
            <DropdownListItem id={'class-3'} value={'Класс 3'} name={'dangerClass'} />
          </DropdownInput>
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
            <input value={'-20'} className="form__input form__input_width_half" />
          </label>
          <label className="form__label form__label_width_half">
            <p className="form__input-name">До, &#176;C</p>
            <input value={'+23'} className="form__input form__input_width_half" />
          </label>
        </div>
      }
    </Fieldset>
  );
}

export default CargoFieldset;
