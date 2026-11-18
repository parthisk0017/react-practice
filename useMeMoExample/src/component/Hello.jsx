


import React from 'react'

const Hello = () => {
    console.log("iam hello component");
    
  return (
    <div>
        <h2>Helloooooooooo</h2>
    </div>
  )
}

export default React.memo(Hello) 