import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Index';
import Footer from './components/Footer';
import Header from './components/Header';

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;