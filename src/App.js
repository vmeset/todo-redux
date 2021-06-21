import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'

import { showLoaderAction } from './store/notesReducer';
import { fetchNotes } from './store/api';

import AppRouter from './components/AppRouter';
import Navbar from './components/Navbar';
import Loader from './components/Loader';

const App = () => {

  const {auth} = useSelector(state => state.login)
  const [user, loading, error] = useAuthState(auth)
  const dispatch = useDispatch()

  useEffect( () => {
    dispatch(showLoaderAction())
    dispatch(fetchNotes())
  }, [dispatch] )
  
  if (loading) {
    return <Loader />
  }

  return (
    <div className="app-wrapper">
      <Navbar />
      <AppRouter  />
    </div>
  );
};

export default App;