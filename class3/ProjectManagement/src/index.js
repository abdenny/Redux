import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import BaseLayout from './layout/BaseLayout';
import ProjectManagement from './components/projectManagement/ProjectManagement';
//Installing Redux
import { createStore } from 'redux';
import { Provider } from 'react-redux';

//importing in reducer to pass to the store
import reducer from './reducers/reducer';

//testing things out
import addProject from './actions/addProject';

let store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/projectmanagement' component={ProjectManagement} />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
