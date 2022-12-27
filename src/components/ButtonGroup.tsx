import React from 'react';

const ButtonGroup = (props: any) => {
  const { decreaseNum, increaseNum } = props;
  // const decreaseNum = props.decreaseNum;
  // const increaseNum = props.increaseNum;

  return (
    <div>
      <button onClick={decreaseNum}>-</button>
      <button onClick={increaseNum}>+</button>
    </div>
  );
};

export default ButtonGroup;