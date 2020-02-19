import React, { Component } from 'react';
import HomeSlider from './Slider';

class Home extends Component {

    state = {
        home: ''
    }
    
    render() {
        return (
            <>
                <HomeSlider />
            </>
        )
    }
}

export default Home;