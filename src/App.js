import './App.css';
import React, { useState } from 'react';
import Button from './Button';
import DisplayBlock from './DisplayBlock';

function App() {
  const [displayColor, setDisplayColor] = useState({backgroundColor: "green", textColor: "white"});

  const stateFunc = (newBkColor, newTextColor) => {
    setDisplayColor({backgroundColor: newBkColor, textColor: newTextColor});
  }

  return (
    <div className="App">
      <Button bkColor="red" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="white" onClickAct={stateFunc} />
      <Button bkColor="blue" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="yellow" onClickAct={stateFunc} />
      <Button bkColor="yellow" text="Don't worry if something doesn't work. If everything worked, you would be fired)" textColor="black" onClickAct={stateFunc} />
      <DisplayBlock bkColor={displayColor.backgroundColor} textColor={displayColor.textColor} />
    </div>
  );
}

export default App;
