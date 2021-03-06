import { FC } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Login';

const AuthModule: FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
    </Switch>
  );

};

export default AuthModule;
