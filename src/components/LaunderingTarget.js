import React, {Component} from 'react';
import {Item,Image,Rating,Card,Button,Statistic} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';

class LaunderingTarget extends Component {
  render() {
    return(
      <Item>
        <Item.Content>
          <Item.Header>Account id: {this.props.id}</Item.Header>
          <Rating icon='star' defaultRating={3} maxRating={4} />
          <Item.Extra>
            <Statistic.Group color='teal'>
              <Statistic>
                <Statistic.Value>
                  <NumberFormat value={this.props.totalIncoming} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalPrecision={0} />
                  </Statistic.Value>
                <Statistic.Label>Incoming Transfers ($)</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{this.props.numIncoming}</Statistic.Value>
                <Statistic.Label>Incoming Transfers</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value><NumberFormat value={this.props.totalOutgoing} displayType={'text'} thousandSeparator={true} prefix={'$'} decimalPrecision={0} /></Statistic.Value>
                <Statistic.Label>Outgoing Transfers ($)</Statistic.Label>
              </Statistic>
              <Statistic>
                <Statistic.Value>{this.props.numOutgoing}</Statistic.Value>
                <Statistic.Label>Outgoing Transfers</Statistic.Label>
              </Statistic>

            </Statistic.Group>
          </Item.Extra>
          <Item.Meta>Owner: {this.props.owner}</Item.Meta>
          <Item.Meta>Centrality: {this.props.centrality}</Item.Meta>
          <Item.Meta>Partition: {this.props.partition}</Item.Meta>
          <Item.Meta>Cluster: {this.props.cluster}</Item.Meta>

          <Item.Extra>Related Accounts:
            <Card.Group>
            {this.props.linkedAccount.map(acct => (
              <Card key={acct.id}>
                <Card.Content>

                  <Card.Header>
                    {acct.ownedBy.name}
                  </Card.Header>
                  <Card.Meta>
                    {acct.id}
                  </Card.Meta>
                  <Card.Description>
                  Total transfer: {acct.numOutgoingTransfers}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <div className='ui two buttons'>
                    <Button basic color='green'>Approve</Button>
                    <Button basic color='red'>Flag</Button>
                  </div>
                </Card.Content>
              </Card>
            ))}




            </Card.Group>
          </Item.Extra>

        </Item.Content>
      </Item>
    )
  }
}

export default LaunderingTarget;