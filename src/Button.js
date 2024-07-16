import React from 'react';

function Button(props) {
  const btnClickHandler = () => {
    props.onClickAct(props.bkColor, props.textColor);
  }

  return (
    <button className="Button" style={{ backgroundColor: props.bkColor, height: "50px", color: props.textColor }} onClick={btnClickHandler}>
      {props.text}
    </button>
  );
}

export default Button;
