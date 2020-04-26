import React from 'react';
import styled from 'styled-components'
import {NavLink} from 'react-router-dom'
import Icon from 'components/Icon'



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
      a{
        display:flex;
        flex-direction:column;
        align-items:center;
        width:100%;
        &.actived{
          color:red;
          fill:red;
        }
      }
      .icon{
          width:24px;
          height:24px;
      }
    }
  }
`;


export default function Nav (){
    return (
    <NavWrapper>
         <ul>
            <li>
                <NavLink to="/tags" activeClassName='actived'> <Icon name='label' />标签</NavLink>
            </li>
            <li> 
                <NavLink to="/money" activeClassName='actived'>  <Icon name='money' />钱包</NavLink>
            </li>
            <li>
                <NavLink to="/statistics" activeClassName='actived'> <Icon name='statistics' />统计</NavLink>
            </li>
          </ul>
    </NavWrapper>)
}
