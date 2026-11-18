import React from 'react'

const Child = () => {
    console.log("child is rendering");
    
  return (
    <div>
        <h3>child</h3>
        
    </div>
  )
}

export default React.memo(Child)