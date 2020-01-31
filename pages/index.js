import Head from 'next/head';
import { useState, useEffect } from 'react';

const index = () => {
	const [count, setCount] = useState(0);
	let giuseppi = '';
	let giovanni = '';

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
			<Head>
				<title>cereal</title>
			</Head>
			<p>bowls of cereal eaten: {count}</p>
			<button onClick={() => setCount(Number(localStorage.getItem('bowlCount')) + 1)}>eat cereal</button>
			<div>
				<p>{giuseppi}</p>
				<p>{giovanni}</p>
			</div>
			<style jsx>{`
				p {
					display: flex;
					flex-direction: column;
					flex-basis: auto;
					flex: 1;
				}
				div {
					display: flex;
					flex-direction: row;
					flex-wrap: wrap;
					width: 100%;
				}
			`}</style>
		</>
	)
}

export default index;
