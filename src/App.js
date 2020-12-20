import React, {Component} from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {createClient} from 'contentful'
import Home from './Home.jsx'
import Post from './Post.jsx'
import PostForm from './PostForm.jsx'
import './App.css'
const API_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID
const API_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN

const client = createClient({
  space: API_SPACE_ID,
  accessToken: API_TOKEN,
})

class App extends Component {
  state = {
    posts: [],
  }

  componentDidMount() {
    client.getEntries()
    .then(({items}) => {
      this.setState({
        posts: items
      })
    })
  }

  createNestedRoutes = () => {
    return this.state.posts.map((post) => (
      <Route exact path={`/posts/${post.fields.id}`} key={post.fields.id}>
        <Post key={post.fields.id} post={post} />
      </Route>
    ))
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home posts={this.state.posts} />
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
