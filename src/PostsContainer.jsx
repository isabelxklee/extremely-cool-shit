import React from 'react'
import Wrapper from './components/Wrapper.jsx'
import Post from './Post.jsx'

const PostsContainer = ({posts}) => (
  <Wrapper>
    {posts.map((post) => (
      <Post key={post.id} post={post} />
    ))}
  </Wrapper>
)

export default PostsContainer
