export default (props) => {
  return (
    <div>
      <label>Qtde de Números: </label>
      <input
        value={props.quantidade}
        onChange={(e) => props.onChangeInput(+e.target.value)}
      ></input>
    </div>
  );
};
