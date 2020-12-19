import React from 'react'
import {Link} from 'react-router-dom'

const PostPreview = ({post}) => (
  <article>
    <p>
      {post.time} on {post.date}
    </p>
    <Link to={`/posts/${post.id}`}>
      <h2>{post.title}</h2>
    </Link>
  </article>
)

export default PostPreview
