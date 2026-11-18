import React from 'react';
import { useContext } from 'react';
import { mycontext } from '../App';

const Grandchild = (props) => {
 let data = useContext(mycontext)
  return (
    <div>
      <>Grandchild...{props.gift}</>
      <h3>{data}</h3>
    </div>
  );
};

export default Grandchild;

