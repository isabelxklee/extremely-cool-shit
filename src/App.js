import React, {Component} from 'react'
import Header from './components/Header.jsx'
import IntroWrapper from './components/IntroWrapper.jsx'
import Circle from './components/Circle.jsx'
import PostsContainer from './PostsContainer.jsx'
import './App.css'

class App extends Component {
  state = {
    posts: [],
    triggerWarnings: [],
  }

  postsArray = [
    {
      id: 1,
      title: 'testing',
    },
  ]

  componentDidMount() {
    this.setState({
      posts: this.postsArray,
    })
  }

  render() {
    console.log(this.state.posts)
    
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
        <PostsContainer posts={this.state.posts} />
      </section>
    )
  }
}

export default App
