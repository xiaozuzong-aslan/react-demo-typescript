import React from 'react';
import 'index.scss';
import 'helper.scss'
import {
  HashRouter as Router,

  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import styled from 'styled-components'
import Nav from 'components/Nav'

const Wrapper  = styled.div`
  border:1px solid red;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  
`
const Main = styled.main`
  flex-grow:1;
`;

export default function App() {
  return (
    <Wrapper>
       <Router>
        <Main>
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
        </Main>
        <Nav />
    </Router>
    </Wrapper>
  );
}

function Tags() {
  return <h2>Tags</h2>;
}

function Money() {
  return <h2>Money</h2>;
}

function Statistics() {
  return <h2>Statistics</h2>;
}
function NotFind(){
  return <h2>大哥你想干哈</h2>
}
