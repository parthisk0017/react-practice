import React from 'react';
import Child from './Child';

const Parent = (props) => {
  return (
    <div>Parent..
      <Child gift={props.gift} />
    </div>
  );
};

export default Parent;