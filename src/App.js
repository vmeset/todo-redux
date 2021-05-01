import React from 'react';
import { Route, Switch } from 'react-router';

import Navbar from './components/Navbar';
import Buy from './pages/Buy';
import Done from './pages/Done';
import Main from './pages/Main';

const App = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/done" component={Done} />
        <Route path="/buy" component={Buy} />
      </Switch>
    </div>
  );
};

export default App;