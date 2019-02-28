import React, { Component } from 'react';
import Feed from './Feed';
import config from 'universal-config';
const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      isLoading: false
    }

    this.fetchPosts = this.fetchPosts.bind(this);
    this.handleInfiniteScroll = this.handleInfiniteScroll.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
    window.addEventListener('scroll', this.handleInfiniteScroll, false);
  }

  componentWillUnmount() {
    window.addEventListener('scroll', this.handleInfiniteScroll, false);
  }

  fetchPosts() {
    axios.get(config.get("API_URL"))
    .then(response => {
      let newEntries = response.data;
      this.setState(prevState => {
        return {
          feed: prevState.feed.concat(newEntries),
          isLoading: false
        }
      });
    })
    .catch(err => console.log(err));
  }

  handleInfiniteScroll(e) {
    if ((!this.state.isLoading && 
      window.innerHeight + window.scrollY) >= document.body.offsetHeight - 500 && 
      this.state.feed.length) {
      this.setState(prevState => {
        return {
          isLoading: !prevState.isLoading
        }
      }, () => {
        this.fetchPosts();
      });
    }
  }

  render() {
    let { feed } = this.state;
    return (
      <div className="main-content">
        <h1>Infinite Scroll Unsplash Gallery</h1>
        <Feed feed={feed} />
      </div>
      
    );
  }
};

export default App;