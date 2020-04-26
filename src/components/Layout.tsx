import React from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'

const Layout  = styled.div`
  background:white;
  min-height:100vh;
  display:flex;
  flex-direction:column;
  color:#333;
`
const Main = styled.main`
  flex-grow:1;
  display:flex;
  flex-direction:column;
`;
export default function(props:any) {
    return (
        <Layout>
            <Main>{props.children}</Main>
            <Nav />
        </Layout>
    )
}
