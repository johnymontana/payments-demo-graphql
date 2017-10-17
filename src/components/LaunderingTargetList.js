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
          key={target.id}
          id={target.id}
          owner={target.ownedBy.name}
          centrality={target.centrality}
          partition={target.partition}
          cluster={target.cluster}
          totalOutgoing={target.totalOutgoing}
          totalIncoming={target.totalIncoming}
          numOutgoing={target.numOutgoingTransfers}
          numIncoming={target.numIncomingTransfers}
          linkedAccount={target.linkedAccounts}
        />
      ))}
    </Item.Group>
  );
};

export default graphql(
  gql`
      {
          targets: LaunderingTarget(first: 3) {
          id
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
          linkedAccounts(first:3) {
              id
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