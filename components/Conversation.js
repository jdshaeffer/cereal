import { useState } from 'react';

const Conversation = (props) => {
  const [color, setColor] = useState('yellow');

  let count = props.count;
  let giuseppi = '';
  let giovanni = '';

	if (count >= 10) {
		giuseppi = `woah don't you think that's enough`;
	}
	if (count >= 20) {
		giuseppi = `seriously you might wanna slow it down`;
	}
	if (count >= 30) {
		giuseppi = `cmon it's not worth it`;
	}
	if (count >= 40) {
		giuseppi = `you're gonna hurt yourself`;
	}
	if (count >= 50) {
		giuseppi = `how are you eating this much without slowin down`;
	}
	if (count >= 60) {
		giuseppi = `it's actually really impressive`;
	}
	if (count >= 70) {
		giuseppi = `YO GIOVANNI COME CHECK THIS GUY OUT`;
	}
	if (count >= 90) {
    giovanni = `huh whatdaya want`;
    setColor('white');
	}
	if (count >= 105) {
		giuseppi = `look at this guy he aint stoppin`;
	}
	if (count >= 110) {
		giovanni = `woah yeah he's really throwin it down`;
	}
	if (count >= 115) {
		giuseppi = `he's on bowl number ${count} and it's blowin my mind`;
	}
	if (count >= 120) {
		giovanni = `what's he eatin`;
	}
	if (count >= 130) {
		giuseppi = `yeah what are you eatin`;
	}

  return (
    <>
      <div className='row'>
				<div className='column'>
          <p><mark style={{ backgroundColor: color }}>{giuseppi}</mark></p>
        </div>
				<div className='column'>
          <p><mark>{giovanni}</mark></p>
        </div>
      </div>
    </>
  )
}

export default Conversation;
