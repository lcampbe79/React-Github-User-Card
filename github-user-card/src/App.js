import React from 'react';
import axios from 'axios';
import './App.css';

import CardList from './components/CardList.js'
import UserCard from './components/MyCard.js'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myData: {},
      myFollowers: []
    }
  }
  componentDidMount() {
    axios
    .get('https://api.github.com/users/lcampbe79')
    .then(res => this.setState({myData: res.data}))
    .catch(err => console.log("Server Error"));

    axios
    .get('https://api.github.com/users/lcampbe79/followers')
    .then(res => this.setState({myFollowers: res.data}))
    .catch(err => console.log("Server Error"));
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
       <UserCard user={this.state.myData} myFollowers={this.state.myFollowers}/>
       <CardList myFollowers={this.state.myFollowers} />
      </div>
    );
  }
}

export default App;
