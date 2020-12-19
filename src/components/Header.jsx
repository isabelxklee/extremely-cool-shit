import React from 'react'
import styled from 'styled-components'

const Links = styled.header`
  padding: 1rem;
  background-color: #202020;
  color: white;
`

const Header = () => (
  <Links>
    <p className="left">isabel k. lee's diary</p>
    <p className="right">proceed with caution</p>
  </Links>
)

export default Header
