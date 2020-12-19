import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Post from './Post.jsx'
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
      title: 'i’m being chased by a time travelling ghost',
      description:
        'i don’t know why but i’m in my goddamn feels after watching rue’s special euphoria episode after season 1 ended',
      body:
        'i don’t know why but i’m in my goddamn feels after watching rue’s special euphoria episode after season 1 ended. i don’t know why but i’m in my goddamn feels after watching rue’s special euphoria episode after season 1 ended. i don’t know why but i’m in my goddamn feels after watching rue’s special euphoria episode after season 1 ended',
      triggerWarnings: ['substance abuse', 'addiction', 'alcoholic’s anonymous', 'depression'],
    },
  ]

  componentDidMount() {
    this.setState({
      posts: this.postsArray,
    })
  }

  createNestedRoutes = () => {
    return this.state.posts.map((post) => (
      <Route exact path={`/posts/${post.id}`} key={post.id}>
        <Post post={post} />
      </Route>
    ))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home app={this.state} />
          </Route>
          {this.createNestedRoutes()}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
