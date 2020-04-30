import React from 'react';
import 'index.scss';
import 'helper.scss'
import {HashRouter as Router,Switch,Route,Redirect} from 'react-router-dom'


import Tags from 'views/label';
import Money from 'views/money';
import Statistics from 'views/statistics';
import NotFind from 'views/notFind';
import Tag from 'views/Tag'

export default function App() {
  return (
       <Router>
        <Switch >
        
          <Redirect  from="/" exact to="/money" />
          <Route exact path="/tags">
            <Tags />
          </Route>
          <Route exact path="/tags/:id">
            <Tag />
          </Route>
          <Route exact path="/money" >
            <Money />
          </Route>
          <Route exact path="/statistics">
            <Statistics />
          </Route>
          <Route path="*">
            <NotFind />
          </Route>
        </Switch>
    </Router>
  );
}