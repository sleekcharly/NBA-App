import React, { Component } from 'react';
import axios from 'axios';
import { URL_SUBS } from './paths';

class Subscriptions extends Component {

    state = {
        email:'',
        error: false,
        success: false,
        alreadyIn: false
    }

    onChangeInput = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    saveSubscription = (email) => {
        axios.get(`${URL_SUBS}?email=${email}`)
            .then( response => {
                if(!response.data.length){

                } else {
                    
                }
            } )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(regex.test(email)){
            this.saveSubscription(email);
        } else {
            this.setState({
                error: true
            });
        }
    }

    render() {
        const state = this.state;

        return (
            <div className="subcribe_panel">
                <h3>Subscribe to use</h3>
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            value={state.email}
                            placeholder="yourmail@email.com"
                            onChange={this.onChangeInput}
                        />
                    </form>
                </div>
                <small>
                    hkbkbvkvbbab;kbcb k;ba ;kb kcab ;cb;ab ;bk;ab;b;bka bkkk;bk; 
                    ki falseaflivubal adb piab jajbjv hipb  cbab ak cbb
                </small>
            </div>
        )
    }
}

export default Subscriptions
