import React from 'react'
import Wrapper from './components/Wrapper.jsx'

const Post = ({post}) => (
  <Wrapper>
    <h1>{post.title}</h1>
  </Wrapper>
)

export default Post
