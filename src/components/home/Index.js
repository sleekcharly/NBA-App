import React, { Component } from 'react';
import HomeSlider from './Slider';
import Subscriptions from '../utils/subscribe';
import HomeArticles from './Articles';

class Home extends Component {

    state = {
        home: ''
    }
    
    render() {
        return (
            <>
                <HomeSlider />
                <Subscriptions />
                <div className="container">
                  <HomeArticles />
                </div>
            </>
        )
    }
}

export default Home;