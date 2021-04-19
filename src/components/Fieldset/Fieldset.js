import React from 'react';

function Fieldset({ children, type, count, title }) {
  return (
    <fieldset className={`form__fieldset form__fieldset_type_${type}`}>
      <div className="form__title">
        <div className="form__count"><span>{ count }</span></div>
        <h3 className="form__text">{ title }</h3>
      </div>
      { children }
    </fieldset>
  );
}

export default Fieldset;
