import React from "react";

const PassoForm = (props) => {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.setPasso(+e.target.value)} // passar valor e n somente evento, o + faz com que o valor seja inteiro
      />
    </div>
  );
};

export default PassoForm;
