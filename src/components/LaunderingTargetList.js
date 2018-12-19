import React from 'react';
import {Item} from 'semantic-ui-react';
import {graphql, gql} from 'react-apollo';

import LaunderingTarget from './LaunderingTarget';

const LaunderingTargetList = ({data}) => {
  if (data.loading) return <div>Loading...</div>;
  if (data.error) {
    console.log(data);
    return <div>Error!</div>;
  }
  if(data.targets.length === 0) return <div>No targets!</div>

  return(
    <Item.Group divided>
      {data.targets.map(target => (
        <LaunderingTarget
          key={target.accountId}
          id={target.accountId}
          owner={target.ownedBy.name}
          centrality={target.centrality}
          partition={target.partition}
          cluster={target.cluster}
          totalOutgoing={target.totalOutgoing}
          totalIncoming={target.totalIncoming}
          numOutgoing={target.numOutgoingTransfers}
          numIncoming={target.numIncomingTransfers}
          linkedAccount={target.linkedAccounts}
          toCluster1={target.toCluster1}
          toCluster2={target.toCluster2}
          toCluster3={target.toCluster3}
          toCluster4={target.toCluster4}
          toCluster5={target.toCluster5}
          fromCluster1={target.fromCluster1}
          fromCluster2={target.fromCluster2}
          fromCluster3={target.fromCluster3}
          fromCluster4={target.fromCluster4}
          fromCluster5={target.fromCluster5}
          incomingSeries={target.incomingSeries}
          outgoingSeries={target.outgoingSeries}
          allSeries={target.allSeries}
        />
      ))}
    </Item.Group>
  );
};

export default graphql(
  gql`
      {
          targets: LaunderingTarget(first: 10) {
          accountId
          ownedBy {
              name
          }
          cluster
          current
          partition
          centrality
          totalIncoming
          totalOutgoing
          numIncomingTransfers
          numOutgoingTransfers
          toCluster1
          toCluster2
          toCluster3
          toCluster4
          toCluster5
          fromCluster1
          fromCluster2
          fromCluster3
          fromCluster4
          fromCluster5
          incomingSeries
          outgoingSeries
          allSeries
          linkedAccounts(first:3) {
              accountId
              cluster
              centrality
              ownedBy {
                  name
              }
              numIncomingTransfers
              numOutgoingTransfers
              totalIncoming
              totalOutgoing
          }
      }
      }


  `,
  {

  },
)(LaunderingTargetList);