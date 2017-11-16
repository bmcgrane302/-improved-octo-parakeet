import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TopNav from './TopNav'
import TopicInput from './TopicInput'
import TopicList from './TopicList'

class App extends Component {
  state = {
    topics: []
  }

  updateTopicList = (topic) => {
    console.log('the topic is: ', topic);
    this.setState({ topics: this.state.topics.concat(topic) })
  }

  render() {
    return (
      <div className="App">
        <TopNav />
        <TopicInput updateTopicListFunc={this.updateTopicList}/>
        <TopicList topics={this.state.topics} />
      </div>
    );
  }
}

export default App;
