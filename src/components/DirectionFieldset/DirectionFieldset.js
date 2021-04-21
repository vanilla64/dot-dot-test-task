import React from 'react';
import Fieldset from "../Fieldset/Fieldset";

function DirectionFieldset(props) {
  return (
    <Fieldset type={'direction'} count={'1'} title={'Маршрут'}>
      <label className="form__label form__label_dir_row">
        <p className="form__input-name">Откуда</p>
        <div className="form__input-wrap form__input-wrap_color_light">
          <input className="form__input form__input_width_full" />
        </div>
      </label>
      <label className="form__label form__label_dir_row">
        <p className="form__input-name">Куда</p>
        <div className="form__input-wrap form__input-wrap_color_light">
          <input className="form__input form__input_width_full" />
        </div>
      </label>
    </Fieldset>
  );
}

export default DirectionFieldset;
