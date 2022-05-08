import React from 'react'

import { Route, Switch } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'
import Customers from '../pages/Customers'
import Product from '../pages/Product'
import Import from '../pages/Import'
import Category from '../pages/Categories'
import Login from '../pages/login/Login'

const Routes = () => {
    return (
        <Switch>
            <Route path='/login' component={Login}/>
            <>
                <Route path='/' exact component={Dashboard}/>
                <Route path='/customers' component={Customers}/>
                <Route path='/products' component={Product}/>
                <Route path='/import' component={Import}/>
                <Route path='/categories' component={Category}/>
            </>
        </Switch>
    )
}

export default Routes
