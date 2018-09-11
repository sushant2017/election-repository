import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './Header';
import Footer from './Footer';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';

ReactDOM.render(<App />, document.getElementById('body'));
registerServiceWorker();


ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));

