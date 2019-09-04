import React from 'react';
import { Header, Image, Table } from 'semantic-ui-react';

const CardList = props => {
console.log(props)
  return (
    <div>
      <Table basic='very' celled collapsing>
        <Table.Body>
          {props.myFollowers.map(follower =>
            <Table.Row key={follower.id}>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={follower.avatar_url} rounded size='mini' />
                  <Header.Content>
                      {follower.login}
                    <Header.Subheader>{follower.name}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            )}
        </Table.Body>
      </Table>
    </div>
  )
}

export default CardList;