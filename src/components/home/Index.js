import React, { Component } from 'react';
import HomeSlider from './Slider';
import Subscriptions from '../utils/subscribe';

class Home extends Component {

    state = {
        home: ''
    }
    
    render() {
        return (
            <>
                <HomeSlider />
                <Subscriptions />
            </>
        )
    }
}

export default Home;