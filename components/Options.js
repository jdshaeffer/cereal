import { useState } from 'react';

const Options = (props) => {
  let count = props.count;
  let option = null;

  const [choice, setChoice] = useState('');

  if (count >= 130) {
    option = (
      <div className='row'>
        <div className='cereal-column'>
          <button onClick={() => setChoice('fruityPebbles')}>Fruity Pebbles</button>
        </div>
        <div className='cereal-column'>
          <button onClick={() => setChoice('raisinBran')}>Raisin Bran</button>
        </div>
        <div className='cereal-column'>
          <button onClick={() => setChoice('reesesPuffs')}>Reese's Puffs</button>
        </div>
        <div className='cereal-column'>
          <button onClick={() => setChoice('cornFlakes')}>Corn Flakes</button>
        </div>
      </div>
    );
  }

  console.log(choice);

  return option;
}

export default Options;
