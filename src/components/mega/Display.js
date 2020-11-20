export default (props) => {
  return (
    <div>
      <span>
        Números gerados: <strong>{props.numeros.join(" ")}</strong>!
      </span>
    </div>
  );
};
