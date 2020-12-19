import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const Links = styled.header`
  padding: 1rem;
  background-color: #202020;
  color: white;
`

const Header = () => (
  <Links>
    <Link to={`/`}>
      <p className="left">isabel k. lee's diary</p>
    </Link>
    <p className="right">proceed with caution</p>
  </Links>
)

export default Header
