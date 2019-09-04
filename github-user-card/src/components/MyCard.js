import React from 'react';

function UserCard(props) {
  return(
    <div>
      <img src={props.myData.avatar_url} alt='my pic'></img>
      <h4>Name: {props.myData.name}</h4>
      <h3>Login: {props.myData.login}</h3>
      <h3>{props.myData.followers} Followers</h3>
      <h3>Following: {props.myData.following} people</h3>
      <h3>Located in: {props.myData.location}</h3>
     
    </div>
  )
}

export default UserCard;