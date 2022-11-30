import React, { useState } from 'react';
import ButtonGroup from './ButtonGroup';
import Num from './Num';

const App = () => {
  const [num, setNum] = useState(100);
  // const state = useState(100);
  // const num = state[0];
  // const setNum = state[1];

  const decreaseNum = () => {
    setNum(num - 1);
  };

  const increaseNum = () => {
    setNum(num + 1);
  };

  return (
    <div
      className="container"
    >
      <Num num={num} />
      <ButtonGroup
        decreaseNum={decreaseNum}
        increaseNum={increaseNum}
      />
    </div>
  );
};

export default App;