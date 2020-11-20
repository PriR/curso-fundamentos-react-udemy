import React from 'react';
import DiretaFilho from './DiretaFilho';

const DiretaPai = () => {
  return (
      <div>
          <DiretaFilho nome="Júnior" idade={20} nerd={true}></DiretaFilho>
          <DiretaFilho nome="Paloma" idade={17} nerd={false}></DiretaFilho>
      </div>
  )
}

export default DiretaPai;