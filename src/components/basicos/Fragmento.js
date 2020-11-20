import React from 'react';
// fragment usado para quando não quiser envolver component em uma div

export default function Fragmento() {
    // caso necessário usar propriedades usar: <React.Fragment key="1">
    return (
        <>
            <h2>Fragmento</h2>
            <p>Cuidado com esse erro!</p>
        </>
    ) 
};
