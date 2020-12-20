import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './Home.jsx'
import Post from './Post.jsx'
import PostForm from './PostForm.jsx'
import './App.css'
const API_BASE_URL = 'https://cdn.contentful.com'
const API_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const API_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

class App extends Component {
  state = {
    posts: [],
    triggerWarnings: [],
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}`)
      .then((response) => response.json())
      .then(console.log)
    // .then((postsArray) => {
    //   this.setState({
    //     posts: postsArray,
    //   })
    // })
  }

  createNestedRoutes = () => {
    return this.state.posts.map((post) => (
      <Route exact path={`/posts/${post.id}`} key={post.id}>
        <Post post={post} />
      </Route>
    ))
  }

  render() {
    console.log(process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN)

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
