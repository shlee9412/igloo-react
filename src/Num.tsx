import React from 'react';

const Num = (props: any) => {
  const { num } = props;
  // const num = props.num;

  return (
    <h1>{num}</h1>
  );
};

export default Num;