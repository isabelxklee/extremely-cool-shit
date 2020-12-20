import React from 'react'
import Wrapper from './components/Wrapper.jsx'
import Header from './components/Header.jsx'
import IntroWrapper from './components/IntroWrapper.jsx'
import Circle from './components/Circle.jsx'
import SmallCircle from './components/SmallCircle.jsx'

const Post = ({post}) => (
  <section className="app">
    <Header />
    <IntroWrapper>
      <p>
        {post.time} on {post.date}
      </p>
      <h1 className="landing-text">{post.title}</h1>
      {post.triggerWarnings ? (
        <aside>
          <SmallCircle />
          <p>trigger warnings</p>
          {post.triggerWarnings.join(', ')}
        </aside>
      ) : null}
      <Circle />
    </IntroWrapper>
    <Wrapper>
      <h3 className="description">{post.description}</h3>
      <p>{post.body}</p>
    </Wrapper>
  </section>
)

export default Post
