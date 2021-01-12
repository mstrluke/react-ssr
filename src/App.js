import React from 'react';
import { Switch, Route } from 'react-router-dom';

import routes from './routes';


const App = () => {
  return (
    <Switch>
      {routes.map(({ component: Component, ...route }) => (
        <Route
          {...route}
          key={route.title}
          render={props => <Component {...props} />}
        />
      ))}
    </Switch>
  )
};

export default App;
