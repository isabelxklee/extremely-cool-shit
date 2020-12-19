import React from 'react'
import styled from 'styled-components'

const Links = styled.footer`
  padding: 1rem;
  color: #202020;
`

const Footer = () => (
  <Links>
    <p className="right"><a href="https://www.kleetime.com/" target="no_referrer blank" className="footer">take me back to reality</a></p>
  </Links>
)

export default Footer
