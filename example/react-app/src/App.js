import { useEffect } from "react";
import HypeBeats from "hypebeats";

import logo from './logo.svg';

import './App.css';

const hypebeats = new HypeBeats("hola");

function App() {

	useEffect(() => {

		hypebeats.log({
			message: "log",
		})

		hypebeats.info({
			message: "info",
		})

		hypebeats.error({
			message: "error",
		})

		hypebeats.warn({
			message: "warn",
		})

	}, [])

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
