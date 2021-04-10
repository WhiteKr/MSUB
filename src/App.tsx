import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import ImageBox from './components/ImageBox';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ImageBox />
			</div>
		)
	}
}

export default App;
