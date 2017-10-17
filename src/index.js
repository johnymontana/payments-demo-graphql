import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import ApolloClient, {createNetworkInterface} from 'apollo-client';

import {ApolloProvider} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:7474/graphql/'
});

const client = new ApolloClient({
  networkInterface
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
