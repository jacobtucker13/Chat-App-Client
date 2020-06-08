//make changes by going into client, do:
//git add .
//git commit -am (message)
//git push origin master

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ChatRoom from './components/ChatRoom/ChatRoom'
import Intro from './components/Intro/Intro'

import './App.css';

const App = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/ChatRoom" component={ChatRoom} />
      </Switch>
    </Router>
)

export default App;
