const Options = (props) => {
  let count = props.count;
  let option = null;

  if (count >= 130) {
    option = (
      <>
        <div className='row'>
          <div className='cereal-column'>
            <button>Fruity Pebbles</button>
          </div>
          <div className='cereal-column'>
            <button>Raisin Bran</button>
          </div>
          <div className='cereal-column'>
            <button>Reese's Puffs</button>
          </div>
          <div className='cereal-column'>
            <button>Corn Flakes</button>
          </div>
        </div>
      </>
    );
  }

  return option;
}

export default Options;
