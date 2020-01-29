import Head from 'next/head';
import { useState, useEffect } from 'react';

const index = () => {
	const [count, setCount] = useState(0);

	// run after the first render
	useEffect(() => {
		const storageData = localStorage.getItem('bowlCount');
		if (storageData) {
			setCount(storageData);
		}
	}, [])

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
		</>
	)
}

export default index;
