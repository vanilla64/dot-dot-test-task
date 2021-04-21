import React from 'react';
import TextArea from "../TextArea/TextArea";
import DirectionFieldset from "../DirectionFieldset/DirectionFieldset";
import TransportFieldset from "../TransportFieldset/TransportFieldset";
import CargoFieldset from "../CargoFieldset/CargoFieldset";
import TimeFieldset from "../TimeFieldset/TimeFieldset";

function Form(props) {
  return (
    <form className="form">
      <DirectionFieldset />
      <TransportFieldset />
      <CargoFieldset />
      <TimeFieldset />
      <TextArea />
    </form>
  );
}

export default Form;
