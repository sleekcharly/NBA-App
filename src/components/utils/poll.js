import React, { Component } from 'react';
import axios from 'axios';
import { URL_TEAMS } from './paths';
import cookie from 'react-cookies';

class Poll extends Component {

    state = {
        pollTeams: [],
        error: false
    }

    getpoll() {
        axios.get(`${URL_TEAMS}?poll=true&_sort=count&_order=desc`)
            .then( response => {
                this.setState({
                    pollTeams: response.data
                })
            })
    }

    componentDidMount() {
        this.getpoll();
    }

    addCount(count, id){

        let getCookie = cookie.load('poll');

        if(getCookie === undefined) {
            axios(`${URL_TEAMS}/${id}`,{
                method: 'PATCH',
                headers:{
                    'Content-type': 'application/json'
                },
                data: JSON.stringify({count: count + 1 })
            }).then(response => {
                cookie.save('poll', true)
                this.getpoll();
            });
        } else {
            this.setState({
                error: true
            })
        }
    }

    showPoll() {
        const position = ['1ST', '2ND', '3RD'];

        return this.state.pollTeams.map((item, index) => (
            <div 
                key={index}
                className="poll_item"
                onClick={ () => this.addCount(item.count, item.id)}
            >
                <img alt={item.team} src={`/images/teams/${item.logo}`} />
                <h4>{position[index]}</h4>
                <div>
                    {item.count} votes
                </div>
            </div>
        ))
    }

    render() {
        return (
            <div className="home_poll">
                <h3>Who will be the next champion ?</h3>
                <>
                    <div className="poll_container">
                        {this.showPoll()}
                    </div>
                    {
                        this.state.error ?
                        <div>
                            <p>Sorry, you already voted.</p>
                        </div>
                        : null
                    }
                </>
                
            </div>
        )
    }
}

export default Poll;
