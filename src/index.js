import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Main from './components/main';

import './index.css';

export default class App extends Component {

	render() {

		return (
			<div className="main-class">
				<Header />
				<Footer />
			</div>
		);
	};
};

ReactDOM.render(<App />, document.getElementById('root'));