import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Jumbotron, Button } from 'react-bootstrap';

import { translationMessages } from '../../i18n';
import LanguageProvider from '../LanguageProvider';

import { history, store } from '../../store';

const Main = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages} locale={'es'}>
      <ConnectedRouter history={history}>
        <div className="container">
          <div className="row">
            <AppRouter />
          </div>
        </div>
      </ConnectedRouter>
    </LanguageProvider>
  </Provider>
);

const AppRouter = () => (
  <Switch>
    <Route exact path="/" component={Home} />
  </Switch>
);

const Home = () => (
  <Jumbotron>
    <h1>Hello, world!</h1>
    <p>
      This is a simple hero unit, a simple jumbotron-style component for calling
      extra attention to featured content or information.
    </p>
    <p>
      <Button bsStyle="primary">Learn more</Button>
    </p>
  </Jumbotron>
);

export default Main;
