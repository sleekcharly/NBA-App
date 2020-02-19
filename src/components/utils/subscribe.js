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
                    axios(URL_SUBS, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        data: JSON.stringify({email})
                    }).then( response => {
                        this.setState({
                            email: '',
                            success: true
                        });
                        this.clearMessages()
                    })
                } else {
                    this.setState({
                        email:'',
                        alreadyIn: true
                    });
                    this.clearMessages()
                }
            } )
    }

    clearMessages = () => {
        setTimeout(() => {
            this.setState({
                error: false,
                success: false,
                alreadyIn: false
            })
        }, 2000)
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let email = this.state.email;
        let regex = /\S+@\S+\.\S+/;

        if(regex.test(email)){
            this.saveSubscription(email);
        } else {
            this.setState({
                error: true
            });
            this.clearMessages()
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
                        <div className={state.error ? "error show" : "error"}>Check your email</div>
                        <div className={state.success ? "success show" : "success"}>Thank you</div>
                        <div className={state.alreadyIn ? "success show" : "success"}>You are already subscribed</div>
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
