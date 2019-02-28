import React, { Component } from 'react';
import Feed from './Feed';

const axios = require('axios');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3005/feed')
    .then(response => {
      let newEntries = response.data;
      this.setState(prevState => {
        return {
          feed: prevState.feed.concat(newEntries)
        }
      });
    })
    .catch(err => console.log(err))
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