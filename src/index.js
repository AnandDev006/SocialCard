import React from 'react';
import ReactDOM from 'react-dom';

import SocialCard from './components/layout/SocialCard';
import './styles.css';

function App() {
	return (
		<div className="App">
			<SocialCard />
		</div>
	);
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
