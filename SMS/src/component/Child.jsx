import React, { useContext } from 'react';
import Grandchild from './Grandchild';

const Child = (props) => {
  return (
    <div>Child
       <Grandchild gift={props.gift} />
    </div>
  );
};

export default Child;