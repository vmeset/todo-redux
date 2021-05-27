import React from 'react';

import { useSelector } from 'react-redux';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Redirect, Route, Switch } from 'react-router';

import { privateRoutes } from '../routes';
import { publicRoutes } from '../routes';

import { LOGIN_ROUTE, TODO_ROUTE,  } from '../store/types';

const AppRouter = () => {

    const {auth} = useSelector(state => state.login)
    const [user] = useAuthState(auth)

    return user ? 
            (
                <Switch>
                    {privateRoutes.map(({path, Component}) => 
                        <Route test={"test"} path={path} component={Component} exact={true} key={path} />
                    )}
                    <Redirect to={TODO_ROUTE} />
                </Switch>
            ) : (
                <Switch>
                    {publicRoutes.map(({path, Component}) =>
                        <Route path={path} component={Component} exact={true} key={path} />
                    )}
                    <Redirect to={LOGIN_ROUTE} />
                </Switch>
            )
};

export default AppRouter;