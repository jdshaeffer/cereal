import Head from 'next/head';
import { useState, useEffect } from 'react';

import Conversation from '../components/Conversation';

const index = () => {
	const [count, setCount] = useState(0);
	const [choice, setChoice] = useState('');
	const [option, setOption] = useState(null);

	const sendChoice = (event) => {
		setChoice(event.target.innerHTML);
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

	const eatCereal = () => {
		if (option === null) {
			setCount(count + 1)
		}
	}

	useEffect(() => {
		if (count === 130) {
			setOption(options[0]);
		}
		else {
			setOption(null);
		}
	}, [count]);

	return (
		<>
			<Head>
				<title>cereal</title>
			</Head>

			<p>bowls of cereal eaten: {count}</p>
			<button onClick={eatCereal}>eat cereal</button>

			<Conversation count={count} choice={choice} />
			<div>{option}</div>
			<p>{choice}</p>
		</>
	)
}

export default index;
