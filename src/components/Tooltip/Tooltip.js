import React from 'react';

function Tooltip(props) {
  return (
    <div className="tooltip">
      <p className="tooltip__text">
        Для расчета стоимости необходимо ввести параметры груза,
        пункты отправки и прибытия.
      </p>
    </div>
  );
}

export default Tooltip;
