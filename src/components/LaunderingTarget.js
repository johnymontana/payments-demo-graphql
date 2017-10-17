import React, {Component} from 'react';
import {Item,Rating,Card,Button,Statistic,Grid,Divider} from 'semantic-ui-react';
import NumberFormat from 'react-number-format';
import { VictoryBar, VictoryChart, VictoryAxis,
  VictoryTheme, VictoryStack, VictoryLine,VictoryLabel } from 'victory';

class LaunderingTarget extends Component {
  render() {

    const dataTo = [
      {quarter: 1, earnings: this.props.toCluster1},
      {quarter: 2, earnings: this.props.toCluster2},
      {quarter: 3, earnings: this.props.toCluster3},
      {quarter: 4, earnings: this.props.toCluster4},
      {quarter: 5, earnings: this.props.toCluster5}
    ];


    const dataFrom = [
      {quarter: 1, earnings: this.props.fromCluster1},
      {quarter: 2, earnings: this.props.fromCluster2},
      {quarter: 3, earnings: this.props.fromCluster3},
      {quarter: 4, earnings: this.props.fromCluster4},
      {quarter: 5, earnings: this.props.fromCluster5}
    ];

    return(
      <div>
      <Item>
        <Item.Content verticalAlign='middle'>
          <Item.Header>Account id: {this.props.id} </Item.Header>
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
            <div className='ui two buttons'>
              <Button basic color='green'>Approve</Button>
              <Button basic color='red'>Flag</Button>
            </div>
          </Item.Extra>
          <Item.Meta>Owner: {this.props.owner}</Item.Meta>
          <Item.Meta>Centrality: {this.props.centrality}</Item.Meta>
          <Item.Meta>Partition: {this.props.partition}</Item.Meta>
          <Item.Meta>Cluster: {this.props.cluster}</Item.Meta>

          <Item.Extra
            floated='right'
            style={{"height": "25%"}}
          >

            <Grid columns={4}>

                <Grid.Column key={1}>
                  <Item>
                  <VictoryChart
                    domainPadding={20}
                    theme={VictoryTheme.material}
                    style={{"width": "10%", "height": "10%"}}
                    floated='right'
                  >
                    <VictoryLabel text="Payments by cluster" x={200} y={30} textAnchor="middle"/>
                    <VictoryAxis
                      tickValues={[1, 2, 3, 4, 5]}
                      tickFormat={["Cluster 1", "Cluster 2", "Cluster 3", "Cluster 4", "Cluster 5"]}
                    />
                    <VictoryAxis
                      dependentAxis
                      tickFormat={(x) => (`$${x / 1000}k`)}
                    />
                    <VictoryStack>

                      <VictoryBar
                        data={dataTo}
                        x="quarter"
                        y="earnings"
                      />
                      <VictoryBar
                        data={dataFrom}
                        x="quarter"
                        y="earnings"
                      />
                    </VictoryStack>
                  </VictoryChart>
                  </Item>
                </Grid.Column>
                <Grid.Column key={2}>
                  <Item>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLabel text="Outgoing payments" x={200} y={30} textAnchor="middle"/>
                      <VictoryLine
                        style={{
                          data: { stroke: "#c43a31" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={this.props.outgoingSeries}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>
                <Grid.Column key={3}>
                  <Item>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLabel text="Incoming payments" x={200} y={30} textAnchor="middle"/>
                      <VictoryLine
                        style={{
                          data: { stroke: "#261ec4" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={this.props.incomingSeries}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>
                <Grid.Column key={4}>
                  <Item>
                    <VictoryChart
                      theme={VictoryTheme.material}
                    >
                      <VictoryLabel text="All payments" x={200} y={30} textAnchor="middle"/>
                      <VictoryLine
                        style={{
                          data: { stroke: "#7fc42c" },
                          parent: { border: "1px solid #ccc"}
                        }}
                        data={this.props.allSeries}
                      />
                    </VictoryChart>
                  </Item>
              </Grid.Column>


            </Grid>
          </Item.Extra>



        </Item.Content>
      </Item>

      <Item divided>
        <Item.Extra>
        Related Accounts:
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

              </Card.Content>
            </Card>
          ))}




        </Card.Group>
          </Item.Extra>
      </Item>
        <Divider horizontal>-----</Divider>
      </div>
    )
  }
}

export default LaunderingTarget;