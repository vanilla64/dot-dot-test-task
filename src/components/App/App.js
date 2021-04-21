import React from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import Tooltip from "../Tooltip/Tooltip";

function App() {
  return (
    <div className="App">
      <section className="content">
        <Title title="FTL: Прямая машина" />
        <Form />
        <Tooltip />
      </section>
    </div>
  );
}

export default App;
