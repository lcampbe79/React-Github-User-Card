import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react'

function UserCard(props) {
  return(
    <div>
      {/* <img src={props.user.avatar_url} alt='my pic'></img>
      <h4>Name: {props.user.name}</h4>
      <h3>Login: {props.user.login}</h3>
      <h3>{props.user.followers} Followers</h3>
      <h3>Following: {props.user.following} people</h3>
      <h3>Located in: {props.user.location}</h3> */}
     
      <Card>
        <Image src={props.user.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{props.user.name}</Card.Header>
          <Card.Meta>
            <Icon name='map' />
            <span className='date'>{props.user.location}</span>
          </Card.Meta>
          <Card.Description>
            <Icon name='github' />
            {props.user.login}
          </Card.Description>
          <Card.Description>
          <Icon name='group' />
            {props.user.followers} Followers
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name='like' />
          {props.user.following} Following
        </Card.Content>
      </Card>
    </div>
  )
}

export default UserCard;