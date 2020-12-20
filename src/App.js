import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Post from './Post.jsx'
import PostForm from './PostForm.jsx'
import './App.css'

class App extends Component {
  state = {
    posts: [],
    triggerWarnings: [],
  }

  componentDidMount() {
    fetch("https://extremely-cool-shit.herokuapp.com/posts")
    .then(response => response.json())
    .then((postsArray) => {
      this.setState({
        posts: postsArray,
      })
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
          <Route exact path="/laskdjflasdjflskdfjklsdfds">
            <PostForm posts={this.state.posts} />
          </Route>
          {this.createNestedRoutes()}
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
