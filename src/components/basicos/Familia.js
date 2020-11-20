import React, { cloneElement } from "react";

const Familia = (props) => {
  return (
    <div>
      {/* {props.children.map((child, i) => {
        //quando tem acesso somente a props.children usar map
        return cloneElement(child, { ...props, key: i });
      })} */}
      {/* {cloneElement(props.children, { ...props })} */}
      {/* {props.children} */}
      {/* <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
         <FamiliaMembro nome="Ana" {...props} />
         <FamiliaMembro nome="Gustavo" sobrenome="Silva" /> */}
    </div>
  );
};

export default Familia;
