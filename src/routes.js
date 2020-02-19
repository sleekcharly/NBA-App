import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/home/Index';
import Footer from './components/Footer';
import Header from './components/Header';
import Article from './components/articles'

const Routes = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/article/:id" component={Article}/>
            <Route path="/" component={Home}/>
        </Switch>
        <Footer />
    </BrowserRouter>
)

export default Routes;