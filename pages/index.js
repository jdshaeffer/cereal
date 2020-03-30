import Head from 'next/head';
import { useState, useEffect } from 'react';

import Conversation from '../components/Conversation';
import Options from '../components/Options';

const index = () => {
	const [count, setCount] = useState(0);

	// run once after the first render
	useEffect(() => {
		const storageData = localStorage.getItem('bowlCount');
		if (storageData) {
			setCount(storageData);
		}
	}, []);

	useEffect(() => {
		localStorage.setItem('bowlCount', count);
	});

	return (
		<>
			<Head>
				<title>cereal</title>
			</Head>

			<p>bowls of cereal eaten: {count}</p>
			<button onClick={() => setCount(Number(localStorage.getItem('bowlCount')) + 1)}>eat cereal</button>

			<Conversation count={count} />
			<Options count={count} />
		</>
	)
}

export default index;
