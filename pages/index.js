import Head from 'next/head';
import { useState, useEffect } from 'react';

import Conversation from '../components/Conversation';
import Options from '../components/Options';

const index = () => {
	const [count, setCount] = useState(130);
  const [choice, setChoice] = useState('');

	// run once after the first render
	// useEffect(() => {
	// 	const storageData = localStorage.getItem('bowlCount');
	// 	if (storageData) {
	// 		setCount(storageData);
	// 	}
	// }, []);

	// useEffect(() => {
	// 	localStorage.setItem('bowlCount', count);
	// });

	const handleChildClick = (choice) => {
		setChoice(choice);
	}

	const eatCereal = () => {
		// if (option === null) {
		// }
		setCount(count + 1)
	}

	return (
		<>
			<Head>
				<title>cereal</title>
			</Head>

			<p>bowls of cereal eaten: {count}</p>
			{/* <button onClick={() => setCount(Number(localStorage.getItem('bowlCount')) + 1)}>eat cereal</button> */}
			<button onClick={eatCereal}>eat cereal</button>

			<Conversation count={count} choice={choice} />
			<Options count={count} onChildClick={handleChildClick} />

			<p>{choice}</p>
		</>
	)
}

export default index;
