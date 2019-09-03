import React from 'react';
import axios from 'axios';
import './App.css';

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
    return (
      <div className="App">
       <UserCard myData={this.state.myData} myFollowers={this.state.myFollowers}/>
      </div>
    );
  }
}
function UserCard(props) {
  return(
    <div>
      {/* <img {...myData.html_url} alt='my photo' /> */}
      <h4>Name: {props.myData.name}</h4>
      <h3>Login: {props.myData.login}</h3>
      <h3>{props.myData.followers} Followers</h3>
      <h3>Following: {props.myData.following} people</h3>
      <h3>Located in: {props.myData.location}</h3>
      <div>
        {props.myFollowers.map(follower =>
          <div key={follower.id}>My Followers: {follower.login}</div>
          )}
      </div>
    </div>
  )
}
export default App;
