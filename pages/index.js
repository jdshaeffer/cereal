import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';

import Conversation from '../components/Conversation';

const index = () => {
	const [count, setCount] = useState(125);
	const [choice, setChoice] = useState('');
	const [option, setOption] = useState(null);

	const sendChoice = (event) => {
		setChoice(event.target.innerHTML);

		// display no option once it's been selected
		setOption(null);
	}

	const options = [
		(<div className='row' id='options'>
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
		</div>)
	];

	useEffect(() => {
		if (count === 130) {
			setOption(options[0]);
		}
		else {
			setOption(null);
		}
	}, [count]);

	const eatCereal = () => {
		if (option === null) {
			setCount(count + 1)
		}
	}

	const joinCerealParty = (rate) => {
		const interval = setInterval(() => {
			setCount(count => count+1)
		}, rate);
		return () => clearInterval(interval);
	}
	
	useEffect(() => {
		if (choice === 'Raisin Bran') {
			// giovanni joins
			joinCerealParty(1300);
		}
		else if (choice === 'Reese\'s Puffs') {
			// giovanni joins
			joinCerealParty(1000);
			// giuseppi joins
			joinCerealParty(1000);
		}
		else if (choice === 'Corn Flakes') {
			// giuseppi joins
			joinCerealParty(800);
		}
	}, [choice]);

	return (
		<>
			<Head>
				<title>cereal</title>
			</Head>

			<p>bowls of cereal eaten: {count}</p>
			<button onClick={eatCereal}>eat cereal</button>

			<Conversation count={count} choice={choice} />
			<div>{option}</div>
		</>
	)
}

export default index;
