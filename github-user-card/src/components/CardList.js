import React from 'react';

const CardList = props => {

  return (
    <div>
      {props.myFollowers.map(follower =>
        <div key={follower.id}>My Followers: {follower.login}</div>
        )}
    </div>
  )
}

export default CardList;