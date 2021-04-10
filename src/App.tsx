import React from 'react';
import './styles/App.css';

import Header from './components/Header';
import ImageBox from './components/ImageBox';
import MainContent from './components/MainContent';
import EndArea from './components/EndArea';

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Header />
				<ImageBox />
				<MainContent />
				<EndArea />
			</div>
		)
	}
}

export default App;
