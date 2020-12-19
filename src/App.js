import React from 'react'
import Header from './components/Header.jsx'
import IntroWrapper from './components/IntroWrapper.jsx'
import Circle from './components/Circle.jsx'
import Posts from './Posts.jsx'
import './App.css'

const App = () => (
  <section className="app">
    <Header />
    <IntroWrapper>
        <h1 className="landing-text">If you’ve always wanted to hop into my brain, today’s your lucky day.</h1>
        <h3 className="landing-text">Sometimes I will talk about heavy topics. Here are some example trigger warnings for my posts. If I missed any specific warnings, please let me know and I will add them. Thank you. ❤️</h3>
        <Circle />
    </IntroWrapper>
    <Posts />
  </section>
)

export default App