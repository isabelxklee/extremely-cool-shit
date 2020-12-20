import React from 'react'
import {Link} from 'react-router-dom'

const PostPreview = ({post}) => (
  <article>
    <p>
      {post.time} on {post.date}
    </p>
    <Link to={`/posts/${post.fields.id}`}>
      <h2 className={`${post.triggerWarnings ? 'post-preview tw' : 'post-preview'}`}>
        {post.title}
      </h2>
    </Link>
  </article>
)

export default PostPreview
