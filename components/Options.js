import { useState, useEffect } from 'react';

const Options = (props) => {
  let count = props.count;

  const [option, setOption] = useState(null)

  const sendChoice = (event) => {
    props.onChildClick(event.target.innerHTML);
  }

  useEffect(() => {
    if (count === 130) {
      setOption((
        <div className='row' id='options'>
          <div className='cereal-column'>
            <button onClick={sendChoice}>Fruity Pebbles</button>
          </div>
          <div className='cereal-column'>
            <button onClick={sendChoice}>Raisin Bran</button>
          </div>
          <div className='cereal-column'>
            <button onClick={sendChoice}>Reese's Puffs</button>
          </div>
          <div className='cereal-column'>
            <button onClick={sendChoice}>Corn Flakes</button>
          </div>
        </div>
      ));
    }
    else {
      setOption(null);
    }
  }, [count])

  return option;
}

export default Options;
