import React from 'react'
import Nav from 'components/Nav'
import styled from 'styled-components'

const LayoutWrapper  = styled.div`
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
type Props = {

} & React.HtmlHTMLAttributes<HTMLElement>

const Layout:React.FC<Props> = (props) => {
  return (
      <LayoutWrapper>
          <Main>{props.children}</Main>
          <Nav />
      </LayoutWrapper>
  )
}
export default Layout
