import React from 'react'

const PostPreview = ({post}) => (
  <article>
    <p>{post.time} on {post.date}</p>
    <h2>{post.title}</h2>
  </article>
)

export default PostPreview
