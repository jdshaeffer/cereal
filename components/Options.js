const Options = (props) => {
  let count = props.count;
  let option = null;

  const sendChoice = (event) => {
    props.onChildClick(event.target.innerHTML);
  }

  if (count >= 130) {
    option = (
      <div className='row'>
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
    );
  }

  return option;
}

export default Options;
