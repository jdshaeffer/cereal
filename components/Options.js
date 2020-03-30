import { useState } from 'react';

const Options = (props) => {
  let count = props.count;
  let option = null;

  // handler that calls onChildClick callback passed from parent component to child props
  const sendChoice = (choice) => {
    props.onChildClick(choice);
  }

  if (count >= 130) {
    option = (
      <div className='row'>
        <div className='cereal-column'>
          <button onClick={sendChoice('fruityPebbles')}>Fruity Pebbles</button>
        </div>
        <div className='cereal-column'>
          <button onClick={sendChoice('raisinBran')}>Raisin Bran</button>
        </div>
        <div className='cereal-column'>
          <button onClick={sendChoice('reesesPuffs')}>Reese's Puffs</button>
        </div>
        <div className='cereal-column'>
          <button onClick={sendChoice('cornFlakes')}>Corn Flakes</button>
        </div>
      </div>
    );
  }

  return option;
}

export default Options;
