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
      <h4>{props.myData.name}</h4>
      <h3>{props.myData.login}</h3>
      <h3>{props.myData.followers}</h3>
      <h3>{props.myData.following}</h3>
      <h3>{props.myData.location}</h3>
      <div>
        {props.myFollowers.map(follower =>
          <div key={follower.id}>{follower.login}</div>
          )}
      </div>
    </div>
  )
}
export default App;
