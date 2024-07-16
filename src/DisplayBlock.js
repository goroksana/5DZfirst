import React from 'react';

function DisplayBlock(props) {
  return (
    <div className='DisplayBlock' style={{ backgroundColor: props.bkColor, color: props.textColor, height: "100px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <span>React</span>
    </div>
  );
}

export default DisplayBlock;
