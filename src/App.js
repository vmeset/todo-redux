import React from 'react';
import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'

import AppRouter from './components/AppRouter';

import Navbar from './components/Navbar';
import Loader from './components/Loader';
// import Buy from './pages/Buy';
// import Done from './pages/Done';
// import Main from './pages/Main';

const App = () => {

  const {auth} = useSelector(state => state.login)
  const [user, loading, error] = useAuthState(auth)
  
  if (loading) {
    return <Loader />
  }

  return (
    <div>
      <Navbar />
      <AppRouter />
      {/* <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/done" component={Main} />
        <Route path="/buy" component={Main} />
      </Switch> */}
    </div>
  );
};

export default App;