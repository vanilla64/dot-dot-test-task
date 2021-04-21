import React from 'react';
import Fieldset from "../Fieldset/Fieldset";
import DropdownListItem from "../DropdownListItem/DropdownListItem";
import DropdownInput from "../DropdownInput/DropdownInput";

function TransportFieldset(props) {
  return (
    <Fieldset type={'transport'} count={'2'} title={'Транспорт'}>
      <div className="form__input-container">
        <label className="form__label form__label_width_half">
          <p className="form__input-name">Грузоподъёмность</p>
          <DropdownInput>
            <DropdownListItem id={'1000kg'} value={'1 тонна'} name={'weight'} />
            <DropdownListItem id={'2000kg'} value={'2 тонны'} name={'weight'} />
            <DropdownListItem id={'3000kg'} value={'3 тонны'} name={'weight'} />
          </DropdownInput>
          {/*<input className="form__input form__input_width_half" />*/}
        </label>
        <label className="form__label form__label_width_half">
          <p className="form__input-name">Способ погрузки</p>
          <DropdownInput>
            <DropdownListItem id={'frontLoading'} value={'Задняя'} name={'loadingType'} />
            <DropdownListItem id={'rearLoading'} value={'Передняя'} name={'loadingType'} />
          </DropdownInput>
          {/*<input className="form__input form__input_width_half" />*/}
        </label>
      </div>
    </Fieldset>
  );
}

export default TransportFieldset;
