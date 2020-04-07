import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='' component={} />
          <Route exact path='' component={} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
