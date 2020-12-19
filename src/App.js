import React, {Component} from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import IntroWrapper from './components/IntroWrapper.jsx'
import Wrapper from './components/Wrapper.jsx'
import Circle from './components/Circle.jsx'
import PostPreview from './PostPreview.jsx'
import './App.css'

class App extends Component {
  state = {
    posts: [],
    triggerWarnings: [],
  }

  postsArray = [
    {
      id: 1,
      date: '12/19/2020',
      time: '12:03 a.m.',
      title: 'testing'
    },
  ]

  componentDidMount() {
    this.setState({
      posts: this.postsArray,
    })
  }

  render() {
    const postsPreview = this.state.posts.map((post) => (
      <PostPreview key={post.id} post={post} />      
    ))
    
    return (
      <section className="app">
        <Header />
        <IntroWrapper>
          <h1 className="landing-text">
            If you’ve always wanted to hop into my brain, today’s your lucky day.
          </h1>
          <h3 className="landing-text">
            Sometimes I will talk about heavy topics. Here are some example trigger warnings for my
            posts. If I missed any specific warnings, please let me know and I will add them. Thank
            you. ❤️
          </h3>
          <Circle />
        </IntroWrapper>
        <Wrapper>
          {postsPreview}
        </Wrapper>
        <Footer />
      </section>
    )
  }
}

export default App
