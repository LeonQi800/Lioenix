import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Slime from './slime/app.jsx';
import Goblin from './goblin/app.jsx';

const routing = (
  <Router>
      <Route exact path="/" component={Slime} />
      <Route path='/goblin' component={Goblin} />
  </Router>
);

ReactDOM.render(routing,document.getElementById('app'));

// module.hot.accept();
