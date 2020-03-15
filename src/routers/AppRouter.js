
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom'
import React from 'react';
import createHistory from 'history/createBrowserHistory';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage.js'
import AddExpensePage from '../components/AddExpensePage.js'
import EditExpensePage from '../components/EditExpensePage.js'
import NotFoundPage from '../components/NotFoundPage.js'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'
export const history = createHistory()

const AppRouter = () => (
        <Router history={history}> 
            <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} /*Need exact so that all other pages with / dont also render*/ /> 
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage}/>
                <Route component={NotFoundPage}/>
            </Switch>    
    
            </div>
        </Router>    
);

export default AppRouter;
