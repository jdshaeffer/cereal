import { useState, useEffect } from 'react';

const Conversation = (props) => {
	let count = props.count;
	let choice = props.choice;
  let giuseppi = '';
	let giovanni = '';

  const [color, setColor] = useState({
		giuseppiColor: 'yellow',
		giovanniColor: 'white'
	});

	// change highlight only to the most recent speaker 
	useEffect(() => {
		if (count >= 90) {
			setColor({
				giuseppiColor: 'white',
				giovanniColor: 'yellow'
			});
		}
		if (count >= 100) {
			setColor({
				giuseppiColor: 'yellow',
				giovanniColor: 'white'
			});
		}
		if (count >= 105) {
			setColor({
				giuseppiColor: 'white',
				giovanniColor: 'yellow'
			});
		}
		if (count >= 110) {
			setColor({
				giuseppiColor: 'yellow',
				giovanniColor: 'white'
			});
		}
		if (count >= 115) {
			setColor({
				giuseppiColor: 'white',
				giovanniColor: 'yellow'
			});
		}
		if (count >= 120) {
			setColor({
				giuseppiColor: 'yellow',
				giovanniColor: 'white'
			});
		}
	}, [count]);
	// passing [] (dependency array) with its dependent as second argument tells useEffect() to be called once
	// because useEffect() is only called after each render
	// can't use setState() in useEffect() unless there's a dependency array

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
		giuseppi = `how are you eatin this much without slowin down`;
	}
	if (count >= 60) {
		giuseppi = `it's actually really impressive`;
	}
	if (count >= 70) {
		giuseppi = `YO GIOVANNI COME CHECK THIS GUY OUT`;
	}
	if (count >= 90) {
		giovanni = `huh whatdaya want`;
	}
	if (count >= 100) {
		giuseppi = `look at this guy he aint stoppin`;
	}
	if (count >= 105) {
		giovanni = `woah yeah he's really throwin it down`;
	}
	if (count >= 110) {
		giuseppi = `he's on bowl number ${count} and it's blowin my mind`;
	}
	if (count >= 115) {
		giovanni = `what's he eatin`;
	}
	if (count >= 120) {
		giuseppi = `yeah what are you eatin`;
	}

  return (
		<div className='row'>
			<div className='column'>
				<p><mark style={{ backgroundColor: color.giuseppiColor }}>{giuseppi}</mark></p>
			</div>
			<div className='column'>
				<p><mark style={{ backgroundColor: color.giovanniColor }}>{giovanni}</mark></p>
			</div>
		</div>
  )
}

export default Conversation;
