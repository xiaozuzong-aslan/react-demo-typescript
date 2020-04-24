import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const NavWrapper = styled.nav`
  box-shadow:0 0 3px rgba(0,0,0,0.25);
  line-height:24px;
  ul{
    display:flex;
    li{
      width:33.333vw;
      display:flex;
      justify-content:center;
      padding:16px 0;
    }
  }
`;


export default function Nav (){
    return (
    <NavWrapper>
         <ul>
            <li>
              <Link to="/tags">标签</Link>
            </li>
            <li>
              <Link to="/money">钱包</Link>
            </li>
            <li>
              <Link to="/statistics">统计</Link>
            </li>
          </ul>
    </NavWrapper>)
}
