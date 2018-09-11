import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Header from './Header';
import Footer from './Footer';
import AppDuplicate from './AppDuplicate';
import TermsCondition from './TermsCondition';
import Pedia from './Pedia';
import ContactUS from './ContactUS';
import Blog from './Blog';
import Work from './Work';
import Privacy from './Privacy';

import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import './index.css';

const NoMatch = ({ location }) => (
  <div><h3>No match for <code>{location.pathname}</code></h3>
  </div>
)


ReactDOM.render(<App />, document.getElementById('body'));
registerServiceWorker();


ReactDOM.render(<Header/>, document.getElementById('header'));
ReactDOM.render(<Footer/>, document.getElementById('footer'));


ReactDOM.render(
  <Router>
      <div>

      <Switch>
        <Route exact path="/" component={AppDuplicate} />
        <Route exact path="/About" component={App} />
         <Route exact path="/Blog" component={Blog} />

         <Route exact path="/Pedia" component={Pedia} />
        <Route path="/TermsCondition" component={TermsCondition} />
        <Route path="/ContactUS" component={ContactUS} />
        <Route path="/Work" component={Work} />
         <Route path="/Privacy" component={Privacy} />

         <Route  component={NoMatch} />
</Switch>
      </div>
  </Router>,
  document.getElementById('body')
)
