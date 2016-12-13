import React from 'react';
import Router from 'react-router/lib/Router';
import Route from 'react-router/lib/Route';
import browserHistory from 'react-router/lib/browserHistory';

import App from './App';
import {
    PageHome,
    Page404
} from './components/pages';


export const routes = (
        <Route component={App}>
            <Route path="/" component={PageHome} />
            <Route path="*" component={Page404} />
        </Route>
);

export default () => (
    <Router history={browserHistory}>
        {routes}
    </Router>
);
