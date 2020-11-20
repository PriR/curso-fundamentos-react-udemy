import React from 'react';

export default ({max, min}) => {
  return parseInt(Math.random() * (max - min)) + min;
}

