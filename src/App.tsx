import React from 'react';
import 'index.scss';
import 'helper.scss'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'


import Tags from 'views/label';
import Money from 'views/money';
import Statistics from 'views/statistics';
import NotFind from 'views/notFind';


export default function App() {
  return (
       <Router>
        <Switch >
          <Redirect  from="/" exact to="/money" />
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Route path="*">
            <NotFind />
          </Route>
        </Switch>
    </Router>
  );
}